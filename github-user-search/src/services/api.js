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

export const getUserRepos = async (username, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`, {
      params: { page, per_page: perPage, sort: 'created', direction: 'desc' },
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching repos for user ${username}:`, error);
    throw error;
  }
};

