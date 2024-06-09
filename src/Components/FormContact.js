import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import { Bars } from 'react-loader-spinner';

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted

    emailjs
      .sendForm(
        'service_3ur7bj2',
        'template_6gm40jx',
        formRef.current,
        'c5ogHx40RwXBqPNLI'
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setIsLoading(false); // Set loading to false when form submission is successful
        setSuccessMessage(
          'Thanks For Contacting Us. Your details have been sent. Please allow 24-48 hours for us to respond to your inquiry'
        );
      })
      .catch((error) => {
        console.log(error.text);
        setIsLoading(false); 
        alert('There was an issue in our Server. We are working on it. Please try again later.');

      });
  };

  return (
    <>
      {!isSubmitted ? (
        <form ref={formRef} className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">Name:</label>
          <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />

          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />

          <label className="form-label">Phone:</label>
          <input type="text" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required />

          <label className="form-label">Message:</label>
          <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} required />

          <center>
            <button className="secondary-button" type="submit">
              {isLoading ? (
                <Bars type="ThreeDots" color="#ffffff"  height={30} width={50} />
              ) : (
                'Send'
              )}
            </button>
          </center>
        </form>
      ) : (
        <div className="success-popup">
          <p>{successMessage}</p>
        </div>
      )}
    </>
  );
};

export default FormContact;
