import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const[isAuthenticated, setIsAuthenticated] = usestate(false);

  return (
    <AuthProvider>
    <Router>
      
      <div>
      <button onClick={() => setIsAuthenticated(!isAutheticated)}></button>
      </div>
          
          <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="ProtectedRoute" element={<ProtectedRoute />} />
        </Route>
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;