function About() {
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={textStyle}>
          Our company has been providing top-notch services since 1990. 
          We specialize in various fields including technology, marketing, and consultancy.
        </p>
      </div>
    );
  }
  
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    background: "#f9f9f9",
    minHeight: "100vh"
  };
  
  const headingStyle = {
    color: "#28a745",
    fontSize: "32px"
  };
  
  const textStyle = {
    fontSize: "18px",
    color: "#555"
  };
  
  export default About;
  