import React from "react";
import Form from "./Form";

const JoinUs = () => {
  return (
    <div className="contact-page-wrapper" id="joinus">
      <h1 className="primary-subheading">Join Us</h1>
      <h1 className="primary-heading">Give Us Your Details</h1>
      <p className="primary-text">
        At DebtCollectForU, we are always looking for talented and motivated individuals to join
        our team of debt-collection experts.
      </p>
      <div className="contact-form-container">
        <Form />
      </div>
    </div>
  );
};

export default JoinUs;
