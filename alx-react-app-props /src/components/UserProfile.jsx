import {useContext} from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const {name, age, bio} = useContext(UserContext);
  
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", margin: "20px auto"}}>
    
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Bio: {bio}</p>
    </div>
    );
  };

  export default UserProfile;