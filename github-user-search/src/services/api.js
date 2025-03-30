// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for user ${username}:`, error);
    throw error;
  }
};

export const fetchUsersAdvanced = async ({ username, location, minRepos }) => {
  try {
    let query = '';
    const queryParts = [];

    if (username) {
      queryParts.push(username + ' in:login');
    }
    if (location) {
      queryParts.push(`location:${location}`);
    }
    if (minRepos) {
      queryParts.push(`repos:>=${minRepos}`);
    }

    query = queryParts.join('+');

    const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(endpoint, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};

// ... other API functions ...
