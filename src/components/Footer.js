import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </div>

      <p>&copy; 2022 MASHASHOES.com</p>
    </div>
  );
}

export default Footer;
