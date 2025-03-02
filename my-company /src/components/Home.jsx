function Home() {
    return (
      <div style={{containerStyle}}>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={textStyle}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    background: "#f0f8ff",
    minHeight: "100vh"
  };
  
  const headingStyle = {
    color: "#007bff",
    fontSize: "32px"
  };
  
  const textStyle = {
    fontSize: "18px",
    color: "#333"
  };

  export default Home;