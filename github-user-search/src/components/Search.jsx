
import React, { useState } from 'react';
import { fetchUserData, fetchUsersAdvanced } from '../services/api'; 
import UserCard from './UserCard'; 

function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

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

  const handleBasicSearch = async (event) => {
    event.preventDefault();
    setSearchResults([]);
    setError('');
    setLoading(true);
    setIsAdvancedSearch(false);

    try {
      const data = await fetchUserData(query);
      setSearchResults([data]); 
    } catch (err) {
      setError('Looks like we can\'t find that user.');
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (event) => {
    event.preventDefault();
    setSearchResults([]);
    setError('');
    setLoading(true);
    setIsAdvancedSearch(true);

    let searchQuery = '';
    const queryParts = [];

    if (query) {
      queryParts.push(query + ' in:login');
    }
    if (location) {
      queryParts.push(`location:${location}`);
    }
    if (minRepos) {
      queryParts.push(`repos:>=${minRepos}`);
    }

    searchQuery = queryParts.join('+');

    if (!searchQuery && !query) {
      setError('Please enter at least one search criteria.');
      setLoading(false);
      return;
    }

    try {
      const data = await fetchUsersAdvanced({ username: query, location, minRepos });
      setSearchResults(data.items);
    } catch (err) {
      setError('Error fetching advanced search results.');
      console.error("Error fetching advanced search results:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={isAdvancedSearch ? handleAdvancedSearch : handleBasicSearch} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location (Advanced):</label>
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
          <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">Minimum Repositories (Advanced):</label>
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
        <div className="md:col-span-2 flex items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Searching...' : (isAdvancedSearch ? 'Advanced Search' : 'Search')}
          </button>
          <label htmlFor="advancedSearch" className="ml-4 text-gray-700 text-sm">
            Advanced Search:
            <input
              type="checkbox"
              id="advancedSearch"
              className="ml-2 form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={isAdvancedSearch}
              onChange={() => setIsAdvancedSearch(!isAdvancedSearch)}
            />
          </label>
        </div>
      </form>

      {loading && <p className="mt-4 text-gray-600">Searching...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map(user => (
          <UserCard key={user.id || user.login} user={user} />
        ))}
        {searchResults.length === 0 && !loading && !error && <p className="text-gray-500">No users found matching your criteria.</p>}
      </div>
    </div>
  );
}

export default Search;
