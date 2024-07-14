import React from 'react';
import './EditDomain.css';

const EditDomain = () => (
  <div className="edit-domain">
    <form method="post" className="edit-domain-form">
      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="Enter password" name="password" />
      </div>
      <div className="form-group">
        <label className="form-label">New Domain</label>
        <input className="form-input" type="text" placeholder="Enter new domain" name="newDomain" />
      </div>
      <div className="form-group">
        <label className="form-label">Re-enter Domain</label>
        <input className="form-input" type="text" placeholder="Re-enter domain" name="reenter_newDomain" />
      </div>
      <input className="form-submit" type="submit" value="Save" />
    </form>
  </div>
);

export default EditDomain;
