import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
        setSubmitted(true);
        console.log("Form Data:", formData);
      } else {
        alert("Please fill in all fields.");
      }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      {submitted ? (
        <p style={successMessageStyle}>Thank you! Your message has been received.</p>
      ) : (
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
      )}
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  textAlign: "center",
  background: "#e3f2fd",
  minHeight: "100vh"
};

const headingStyle = {
  color: "#007bff",
  fontSize: "32px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  maxWidth: "400px",
  margin: "0 auto"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px"
};

const textareaStyle = {
  ...inputStyle,
  height: "100px"
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer"
};

export default Contact;
