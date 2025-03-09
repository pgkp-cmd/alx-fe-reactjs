import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';
import Home from './Home';

// Create a QueryClient instance for React Query.
const queryClient = new QueryClient();

function App() {
  // Simulate navigation between "Home" and "Posts"
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setShowPosts(prev => !prev)}>
          {showPosts ? 'Go to Home' : 'Go to Posts'}
        </button>
        <hr />
        {showPosts ? <PostsComponent /> : <Home />}
      </div>
    </QueryClientProvider>
  );
}

export default App;