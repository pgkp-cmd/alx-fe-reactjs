import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // useQuery hook with additional options:
  // - cacheTime: how long unused cache data remains (5 minutes in this example)
  // - refetchOnWindowFocus: prevents automatic refetching when window regains focus
  // - keepPreviousData: retains previous data during background refetching
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 10000, // Data is considered fresh for 10 seconds
    cacheTime: 300000, // Cache data stays in memory for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} style={{ marginBottom: '1rem' }}>
        Refetch Posts
      </button>
      {data.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
