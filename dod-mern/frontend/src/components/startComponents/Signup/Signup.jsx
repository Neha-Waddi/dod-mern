import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = (props) => {
  const [userName, setUserName] = useState("");
  const [domainName, setDomainName] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("passwords doesnot match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        userName:userName,
        password:password,
        domainName:domainName,
        url:url,
      });
      console.log(response.data);
      alert("Signup success!!");
      props.onFormSwitch();
    } catch (error) {
      console.error("Error:", error);
      alert("Internal error Signup!!");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label className="form-label">userName</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your userName"
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
            type="url"
            placeholder="Your URL -(https://your/link)"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="new-password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            type="new-password"
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
