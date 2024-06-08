import React from "react";

import { FaSearchDollar, FaCheckCircle, FaPhone, FaHandshake, FaCalendarAlt, FaGavel } from "react-icons/fa";

const Work = () => {
  const workInfoData = [
    {
      image: <FaSearchDollar style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Pre-Collection Due Diligence",
      text: "Before starting debt collection, we gather and review all relevant documents to understand the situation fully and identify any legal or compliance issues that may arise.",
    },
    {
      image: <FaCheckCircle style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Debtor Verification",
      text: "We verify the debtor's identity and contact details using various tools to ensure accuracy, confirming address, phone number, and other relevant information.",
    },
    {
      image: <FaPhone style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Pre-Collection Communication",
      text: "Before negotiation, we communicate with debtors through letters, emails, and calls, assessing their payment capacity and willingness, crucial for devising effective debt collection strategies.",
    },
    {
      image: <FaHandshake style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Negotiation and Mediation",
      text: "Following pre-collection communication, our skilled negotiators employ various techniques, like mediation and arbitration, to resolve disputes and recover debts, aligning with client goals.",
    },
    {
      image: <FaGavel style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Legal Action",
      text: "Legal action is pursued if negotiation fails. Our legal team, versed in data laws, ensures compliance and explores optimal legal strategies with clients.",
    },
    {
      image: <FaCalendarAlt style={{ color: '#cb0420', fontSize: '5rem' }} />,
      title: "Post-Collection Follow-Up",
      text: "Following successful debt collection, we conduct post-collection follow-up, confirming payment, resolving disputes, and ensuring debtor compliance with payment plans.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="process">
      <div className="work-section-top">
        <p className="primary-subheading">Process</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        At DebtCollectForU, we understand that every debt collection situation is unique and 
        requires a tailored approach. That's why we have developed a multi-stage process that is 
        designed to maximize the chances of successful debt recovery while minimizing the risk 
        of legal and reputational issues
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              {data.image}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
