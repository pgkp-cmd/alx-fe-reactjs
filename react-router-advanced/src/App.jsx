import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile'; // Profile component
import Login from './Login'; // Create a simple Login component
import ProtectedRoute from './ProtectedRoute'; // Protected route component
import { AuthProvider } from './AuthContext'; // Auth context provider
<Route path="/posts/:postId" element={<BlogPost />} />

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
