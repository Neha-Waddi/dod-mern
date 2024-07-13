import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './EditUrl.css';

const EditUrl = () => (
  <div className="edit-url">
    <Header />
    <a href="logout.php" className="logout-link">logout</a>
    <form method="post" className="edit-url-form">
      <div className="form-group">
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="Enter password" name="password" />
      </div>
      <div className="form-group">
        <label className="form-label">New URL</label>
        <input className="form-input" type="url" placeholder="Enter new URL" name="newurl" />
      </div>
      <div className="form-group">
        <label className="form-label">Re-enter URL</label>
        <input className="form-input" type="url" placeholder="Re-enter URL" name="reenter_newurl" />
      </div>
      <input className="form-submit" type="submit" value="Save" />
    </form>
    <div className="navigation-buttons">
      <button onClick={() => window.location.href='editM.php'} className="nav-button">Go Back</button>
      <button onClick={() => window.location.href='homeL.php'} className="nav-button">Go To Home</button>
    </div>
    <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If you are bot Fellow then i am bot Fellow!</marquee>
    <Footer />
  </div>
);

export default EditUrl;
