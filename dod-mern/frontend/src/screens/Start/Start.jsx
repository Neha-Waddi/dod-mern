import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Login from "../../components/startComponents/Login/Login";
import Signup from "../../components/startComponents/Signup/Signup";
import "./Start.css";

const Start = () => (
  <div className="start">
    <Header />
    <Login />
    <Signup />
    <Footer />
  </div>
);

export default Start;
