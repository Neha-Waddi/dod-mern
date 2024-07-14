import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import "./Edit.css";

const Edit = () => (
  <div className="edit">
    <Header />
    <a href="logout.php" className="logout-link">
      logout
    </a>
    <div className="edit-section">
      <button
        onClick={() => (window.location.href = "editP.php")}
        className="edit-button"
      >
        Edit Password
      </button>
      <button
        onClick={() => (window.location.href = "editD.php")}
        className="edit-button"
      >
        Edit Domain
      </button>
      <button
        onClick={() => (window.location.href = "editU.php")}
        className="edit-button"
      >
        Edit URL
      </button>
    </div>
    <button
      onClick={() => (window.location.href = "homeL.php")}
      className="home-button"
    >
      Go To Home
    </button>
    <Footer />
  </div>
);

export default Edit;
