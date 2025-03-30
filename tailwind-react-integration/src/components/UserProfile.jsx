function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src="https://images.pexels.com/photos/31046982/pexels-photo-31046982/free-photo-of-elegant-white-swan-glides-on-tranquil-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load/150" 
        alt="User" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">John Doe</h1>
      <p className="text-sm md:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;