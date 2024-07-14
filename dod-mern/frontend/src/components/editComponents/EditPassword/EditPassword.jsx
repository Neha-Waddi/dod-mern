import React from 'react';
import './EditPassword.css';

const EditPassword = () => (
  <div className="edit-password">
    <form method="post" className="edit-password-form">
      <div className="form-group">
        <label className="form-label">Old Password</label>
        <input className="form-input" type="password" placeholder="Enter old Password" name="oldpassword" />
      </div>
      <div className="form-group">
        <label className="form-label">New Password</label>
        <input className="form-input" type="password" placeholder="Enter new Password" name="newpassword" />
      </div>
      <div className="form-group">
        <label className="form-label">Re-enter Password</label>
        <input className="form-input" type="password" placeholder="Re-enter Password" name="reenter_newpassword" />
      </div>
      <input className="form-submit" type="submit" value="Save" />
    </form>
  </div>
);

export default EditPassword;
