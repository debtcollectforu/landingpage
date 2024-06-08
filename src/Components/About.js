import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import Modal from './Model'; // Make sure the path is correct




const About = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-subheading">About</h1>
        <p className="primary-text">
          Welcome to DebtCollectForU, your trusted partner in debt collation and business 
          management. With years of experience and a proven track record of success, our team of 
          experts is dedicated to helping you recover the debts you are owed while ensuring a 
          professional and compliant process.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleOpenModal}>Learn More</button>
          <Modal show={showModal} handleClose={handleCloseModal}>
            <h1 align="center" className="primary-subheading">About</h1>
            <div align="center">
            <p className="primary-text">
              At DebtCollectForU, we understand the importance of timely and effective debt collection. That's why we employ local entities in Eastern Europe, Russia, the Middle East, and Africa, who are experts in negotiating with debtors and reaching a fair resolution. Our local knowledge and experience enable us to navigate complex legal and cultural issues and ensure that your debts are collected in a legal and compliant manner.
            </p>
            <p className="primary-text">
              Our team of professionals, including military and police personnel from across Europe, bring a unique set of skills and experience to the table. We are committed to executing your requests with the highest level of professionalism and integrity while adhering to all relevant laws and regulations.
            </p>
            <p className="primary-text">
              Before we begin any collection activity, we take the time to gather all the necessary information about your debt and the debtor. This includes reviewing contracts, invoices, and other relevant documents to ensure that we have a comprehensive understanding of the situation. Only after this thorough preparation do we send our teams to negotiate with the debtor on your behalf.
            </p>
            <p className="primary-text">
              At DebtCollectForU, we pride ourselves on our ability to solve even the most complex debt-collection challenges. Whether you are a business or an individual, we have the expertise and resources to help you recover the debts you are owed. Our slogan, "There's no problem we don't know how to solve," reflects our commitment to finding solutions that work for everyone involved.
            </p>
            <p className="primary-text">
              So why wait? <a href="#contactus" onClick={handleCloseModal}><b>Contact Us</b></a> today to learn more about how we can help you recover the debts you are owed. Our team is ready to assist you with all your debt collection needs, no matter where in the world your debtors may be located.
            </p>
          </div>

          </Modal>
        </div>
      </div>
    </div>
  );
};

export default About;
