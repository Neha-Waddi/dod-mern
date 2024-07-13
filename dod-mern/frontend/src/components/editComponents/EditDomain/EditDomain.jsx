import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './EditDomain.css';

const EditDomain = () => (
  <div className="edit-domain">
    <Header />
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
    <div className="navigation-buttons">
      <button onClick={() => window.location.href='editM.php'} className="nav-button">Go Back</button>
      <button onClick={() => window.location.href='homeL.php'} className="nav-button">Go To Home</button>
    </div>
    <marquee behavior="scroll" direction="left">if you are lucky! then i am Lucky. If you are bot Fellow then i am bot Fellow!</marquee>
    <Footer />
  </div>
);

export default EditDomain;
