

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent'; // Ensure this is imported

function App() {
    const userData = {
        name: "Alice", // Name prop to be passed to MainContent
        age: 25,      // Age prop to be passed to MainContent
        bio: "Loves hiking and photography" // Bio prop to be passed to MainContent
    };

    return (
        <UserContext.Provider value={userData}>
            <Router>
                <Header />
                <Navbar />
                <MainContent  // Make sure this is included
                    name={userData.name} 
                    age={userData.age} 
                    bio={userData.bio} 
                /> 
                <Routes>
                    <Route path="/" element={<><WelcomeMessage /><Home /></>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<UserProfile user={userData} />} />
                </Routes>
                <Footer />
            </Router>
        </UserContext.Provider>
    );
}

export default App;
