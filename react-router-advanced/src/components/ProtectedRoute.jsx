import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the authentication context

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
