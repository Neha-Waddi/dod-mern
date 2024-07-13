import React from 'react';
import './Signup.css';

const Signup = () => (
  <div className="signup">
    <form method="post" className="signup-form">
      <div className="form-group">
        <label className="form-label">User Name</label>
        <input className="form-input" type="text" placeholder="Enter user name" name="user_name" />
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="Enter password" name="password" />
      </div>
      <div className="form-group">
        <label className="form-label">Re-enter Password</label>
        <input className="form-input" type="password" placeholder="Re-enter password" name="reenter_password" />
      </div>
      <div className="form-group">
        <label className="form-label">Domain Name</label>
        <input className="form-input" type="text" placeholder="Enter domain name" name="domain_name" />
      </div>
      <div className="form-group">
        <label className="form-label">Enter URL</label>
        <input className="form-input" type="url" placeholder="Enter URL" name="url" />
      </div>
      <input className="form-submit" type="submit" value="Signup" />
      <a href="login.php" className="login-link">Click to login</a>
    </form>
  </div>
);

export default Signup;
