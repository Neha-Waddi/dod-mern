import React from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import HomeDisplay from '../../components/homeComponents/HomeDisplay/HomeDisplay';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAuthClick = (authType) => {
    navigate('/Start', { state: { authType } });
  };

  return (
    <div className="home">
      <Header />
      <form method="post" className="search-form">
        <div className="search-section">
          <h2>Search Below</h2>
        </div>
        <div className="search-container">
          <section>
            <input
              className="search-input"
              type="text"
              placeholder="search here..(eg:www.google.com)"
              name="domain"
            />
            <button className="search-button">
              <b>SEARCH</b>
            </button>
          </section>
        </div>
      </form>
      <div className="auth-buttons">
        <section>
          <button
            onClick={() => handleAuthClick('login')}
            className="auth-button login-button"
          >
            <b>login</b>
          </button>
          <button
            onClick={() => handleAuthClick('signup')}
            className="auth-button signup-button"
          >
            <b>signup</b>
          </button>
        </section>
      </div>
      <h2>
        <b>Our main targets</b>
      </h2>
      <HomeDisplay />
      <Footer />
    </div>
  );
};

export default Home;
