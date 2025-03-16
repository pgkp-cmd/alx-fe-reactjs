import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login();
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default Login;
