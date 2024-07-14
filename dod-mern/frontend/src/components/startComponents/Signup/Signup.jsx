import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [domainName, setDomainName] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/signup", {
        username,
        domainName,
        url,
        password,
      });
      console.log(response.data);
      props.onFormSwitch();
      alert("Signup success!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your username"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Domain Name</label>
          <input
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            type="text"
            placeholder="Your domain name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">URL</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Your URL"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <input className="form-submit" type="submit" value="Signup" />
      </form>
      <button onClick={props.onFormSwitch} className="form-switch">
        Already have an account? Log in here
      </button>
    </div>
  );
};

export default Signup;
