import React from 'react';
import Search from './Search';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>
      <p className="mb-4 text-lg text-gray-700 text-center">
        Search for GitHub users by username and use advanced filters to find users based on their location
        and the minimum number of public repositories they have.
      </p>
      <Search />
      <footer className="mt-8 text-center text-gray-500">
        Developed in Kenya.
      </footer>
    </div>
  );
};

export default Home;
