import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <form method="post" className="login-form">
      <div className="form-group">
        <label className="form-label">User Name</label>
        <input className="form-input" type="text" placeholder="Enter user name" name="user_name" />
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="Enter password" name="password" />
      </div>
      <input className="form-submit" type="submit" value="Login" />
      <a href="signup.php" className="signup-link">Click to signup</a>
    </form>
  </div>
);

export default Login;
