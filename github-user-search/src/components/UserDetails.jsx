import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails, getUserRepos } from '../services/api';

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError('');
      try {
        const userData = await getUserDetails(username);
        setUser(userData);
        const reposData = await getUserRepos(username);
        setRepos(reposData);
      } catch (err) {
        setError('Failed to fetch user details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <p className="text-center mt-8">Loading user details...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-8">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-8">User not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <img src={user.avatar_url} alt={user.login} className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
        <p className="text-gray-600">@{user.login}</p>
        {user.bio && <p className="mt-2 text-gray-700">{user.bio}</p>}
        {user.location && <p className="mt-1 text-gray-700">Location: {user.location}</p>}
        {user.public_repos !== undefined && <p className="mt-1 text-gray-700">Public Repositories: {user.public_repos}</p>}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
          View Profile on GitHub
        </a>
      </div>

      <h2 className="text-xl font-semibold mb-4">Repositories</h2>
      {repos.length > 0 ? (
        <ul className="list-disc pl-6">
          {repos.map(repo => (
            <li key={repo.id} className="mb-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {repo.name}
              </a>
              {repo.description && <p className="text-gray-700 text-sm">{repo.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No public repositories found.</p>
      )}
    </div>
  );
};

export default UserDetails;
