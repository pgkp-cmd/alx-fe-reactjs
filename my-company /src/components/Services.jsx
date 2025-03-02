function Services() {
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>Technology Consulting</li>
          <li style={listItemStyle}>Market Analysis</li>
          <li style={listItemStyle}>Product Development</li>
        </ul>
      </div>
    );
  }
  
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    background: "#fff3cd",
    minHeight: "100vh"
  };
  
  const headingStyle = {
    color: "#ff9800",
    fontSize: "32px"
  };
  
  const listStyle = {
    listStyleType: "none",
    padding: 0
  };
  
  const listItemStyle = {
    fontSize: "18px",
    margin: "10px 0",
    fontWeight: "bold"
  };
  
  export default Services;
  