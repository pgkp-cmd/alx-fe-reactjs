
import axios from 'axios';

//Endpoint for fetching a single user's details
const BASE_URL = 'https://api.github.com/users';

// Function for basic user data retrieval
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Function for advanced search using GitHub Search API
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

    //Endpoint for advanced user search.
    const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};

//Function to fetch repositories for a specific user
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};

// Function to fetch followers for a specific user
export const fetchUserFollowers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}/followers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user followers:', error);
    throw error;
  }
};

// Function to fetch following for a specific user
export const fetchUserFollowing = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}/following`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users they are following:', error);
    throw error;
  }
};
