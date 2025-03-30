import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { searchUsers } from '../services/api';
import UserCard from './UserCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'query':
        setQuery(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos':
        setMinRepos(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults([]);
    setError('');
    setLoading(true);

    let searchQuery = query;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    try {
      const data = await searchUsers(searchQuery);
      setSearchResults(data.items);
    } catch (err) {
      setError('Error fetching search results.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Optional: Function to navigate to user details page
  const handleUserClick = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="query" className="block text-gray-700 text-sm font-bold mb-2">Username/Query:</label>
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Enter username or search term"
            value={query}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">Minimum Repositories:</label>
          <input
            type="number"
            id="minRepos"
            name="minRepos"
            placeholder="e.g., 10"
            value={minRepos}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {loading && <p className="mt-4 text-gray-600">Searching...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map(user => (
          <UserCard key={user.id} user={user} onClick={() => handleUserClick(user.login)} /> 
        ))}
        {searchResults.length === 0 && !loading && !error && <p className="text-gray-500">No users found matching your criteria.</p>}
      </div>
    </div>
  );
};

export default Search;
