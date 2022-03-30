import React from "react";
import bannerLeft from "../assets/bleft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${bannerLeft})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="post">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Full Name....." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter Email....." type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
