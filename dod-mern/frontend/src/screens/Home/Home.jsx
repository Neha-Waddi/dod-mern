import React from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import HomeDisplay from '../../components/homeComponents/HomeDisplay/HomeDisplay';
import './Home.css';

const Home = () => (
  <div className="home">
    <Header />
    <form method="post" className="search-form">
      <div className="search-section">
        <h2>Search Below</h2>
      </div>
      <div className="search-container">
        <section>
          <input className="search-input" type="text" placeholder="search here..(eg:www.google.com)" name="domain" />
          <button className="search-button"><b>SEARCH</b></button>
        </section>
      </div>
    </form>
    <div className="auth-buttons">
      <section>
        <br /><br />
        <button onClick={() => window.location.href = 'login.php'} className="auth-button login-button"><b>login</b></button>
        <button onClick={() => window.location.href = 'signup.php'} className="auth-button signup-button"><b>signup</b></button>
      </section>
    </div>
    <h2><b>Our main targets</b></h2>
    <HomeDisplay />
    <marquee behavior="scroll" direction="left">THANK YOU FOR VISITING THE WEBSITE</marquee>
    <Footer />
  </div>
);

export default Home;
