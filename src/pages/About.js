import React from "react";
import MultiShoes from "../assets/banner2.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiShoes})` }}
      ></div>

      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quas
          ipsam commodi dolor quibusdam in nostrum corporis placeat omnis.
          Necessitatibus nesciunt explicabo harum quos quibusdam sapiente amet
          quod praesentium rem? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus perferendis cumque voluptas ullam accusamus id
          sit iusto aperiam est! Quae culpa esse molestias perferendis
          laboriosam voluptatibus adipisci cum veritatis corporis!
        </p>
      </div>
    </div>
  );
}

export default About;
