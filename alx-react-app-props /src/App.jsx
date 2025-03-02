/**import ProfilePage from './ProfilePage';**/
import UserContext from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", age: 28, bio:"Software developer and tech enthusiast.", email: "jane.doe@example.com"};

  return (
    <UserContext.Provider value={userData}>
      <UserProfile/>
    </UserContext.Provider>
  );
}

export default App;