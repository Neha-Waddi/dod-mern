import React, { useState } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import HomeDisplay from "../../components/homeComponents/HomeDisplay/HomeDisplay";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { useAccountContext } from "../../context/AccountContex";
import axios from "axios";

const Home = () => {
  const [searchedDomain,setSearchedDomain]=useState('');
  const navigate = useNavigate();
  // const { account } = useAccountContext();
  // console.log(account);

  const handleAuthClick = (authType) => {
    navigate("/Start", { state: { authType } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:3001/user/searchDomain",{
        domainName:searchedDomain
      })
      const domainUrl=response.data.data;
      console.log(domainUrl);
      if(domainUrl){
        window.open(domainUrl, '_blank');
      }else{
        alert("Domain not found")
      }
    }catch(err){
      console.log("internal error",err);
    }
  };
  return (
    <div className="home">
      <Header />
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-section">
          <h2>Search Below</h2>
        </div>
        <div className="search-container">
          <section>
            <input
              value={searchedDomain}
              className="search-input"
              type="text"
              placeholder="search here..(eg:www.google.com)"
              name="domain"
              onChange={(e)=>{setSearchedDomain(e.target.value)}}
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
            onClick={() => handleAuthClick("login")}
            className="auth-button login-button"
          >
            <b>login</b>
          </button>
          <button
            onClick={() => handleAuthClick("signup")}
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
