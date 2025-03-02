import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Inline styles as JavaScript objects
const navStyle = {
  backgroundColor: "#007bff", // Correct camelCase property
  padding: "10px 0",
  textAlign: "center"
};

const ulStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex", // Correct property
  justifyContent: "center", // Correct property
  gap: "20px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold"
};

export default Navbar;
