import React from "react";
import Logo from "../Assets/Logo.png";

import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <div>
            <h3 style={{color: "#cb0420"}}>Contact Us</h3>
            <p style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineMail style={{ marginRight: "10px" }} />
              Email: <a href="mailto:getintouch@debtcollectforu.com">getintouch@debtcollectforu.com</a>
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineEnvironment style={{ marginRight: "10px" }} />
              Location: Vienna, Austria
            </p>
            {/* <p><AiOutlineMail /> Email: getintouch@debtcolletforu.com</p>
            <p><AiOutlineEnvironment /> Location: Vienna, Austria</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
