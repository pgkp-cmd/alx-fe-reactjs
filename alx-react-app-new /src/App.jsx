import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter'; // Import Counter component


const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={30} bio="A passionate traveler who loves exploring new cities." />
      <Counter /> {/* Include the Counter component */}
      <Footer />
    </div>
  );
};

export default App;