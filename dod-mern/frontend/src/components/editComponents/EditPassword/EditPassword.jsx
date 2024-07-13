import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './EditPassword.css';

const EditPassword = () => (
  <div className="edit-password">
    <Header />
    <a href="logout.php" className="logout-link">logout</a>
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
    <div className="navigation-buttons">
      <button onClick={() => window.location.href='editM.php'} className="nav-button">Go Back</button>
      <button onClick={() => window.location.href='homeL.php'} className="nav-button">Go To Home</button>
    </div>
    <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If you are bot Fellow then i am bot Fellow!</marquee>
    <Footer />
  </div>
);

export default EditPassword;
