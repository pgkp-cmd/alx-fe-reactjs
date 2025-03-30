import React from 'react';
import { Link } from 'react-router-dom'; 

function UserCard({ user, onClick }) {
  return (
    <div className="border rounded p-4 shadow-md cursor-pointer" onClick={onClick}> {/* Added cursor and onClick */}
      <img src={user.avatar_url} alt={user.login} className="rounded-full w-16 h-16 mb-2" />
      <h3 className="text-lg font-semibold">{user.login}</h3>
      {/*Link to user details page */}
      <Link to={`/users/${user.login}`} className="text-blue-500 hover:underline block mt-1">
        View Profile
      </Link>
    </div>
  );
}

export default UserCard;
