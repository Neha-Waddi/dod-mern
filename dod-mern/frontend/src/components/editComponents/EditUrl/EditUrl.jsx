import React from "react";
import "./EditUrl.css";

const EditUrl = () => (
  <div className="edit-url">
    <form method="post" className="edit-url-form">
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          placeholder="Enter password"
          name="password"
        />
      </div>
      <div className="form-group">
        <label className="form-label">New URL</label>
        <input
          className="form-input"
          type="url"
          placeholder="Enter new URL"
          name="newurl"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Re-enter URL</label>
        <input
          className="form-input"
          type="url"
          placeholder="Re-enter URL"
          name="reenter_newurl"
        />
      </div>
      <input className="form-submit" type="submit" value="Save" />
    </form>
  </div>
);

export default EditUrl;
