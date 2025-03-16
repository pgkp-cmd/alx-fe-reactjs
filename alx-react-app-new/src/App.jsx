import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const userData = { name: 'Jane Doe', age: 30, bio: 'Enthusiastic developer.' };

  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile {...userData} />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
