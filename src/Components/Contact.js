import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contactus">
      <h1 className="primary-subheading">Contact Us</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <p className="primary-text">
        Thank you for considering DebtCollectForU for your debt collection and business dispute management needs. 
      </p>
      <div className="contact-form-container">
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
