import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner3.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Mash Shoes</h1>
        <p>Rarest shoes available for sale </p>
        <Link to="/menu">
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
