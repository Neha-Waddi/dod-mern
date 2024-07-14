import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login success!!");
      } else {
        alert("Incorrect credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
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
          <label className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <input className="form-submit" type="submit" value="Login" />
      </form>
      <button onClick={props.onFormSwitch} className="form-switch">
        Don't have an account? Create here
      </button>
    </div>
  );
};

export default Login;
