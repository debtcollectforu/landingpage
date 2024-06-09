// src/Form.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { storage } from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './Form.css';
import { Bars } from 'react-loader-spinner';


const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
    cv: null,
  });


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);




  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted


    const uploadFile = (file) => {
      return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {},
          (error) => reject(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    try {
      const resumeURL = await uploadFile(formData.resume);
      const cvURL = await uploadFile(formData.cv);

      const templateParams = {
        to_name: 'Recipient Name', // Replace with the recipient's name or fetch it dynamically
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        resume_url: resumeURL,
        cv_url: cvURL,
      };

      emailjs.send(
        'service_3ur7bj2',
        'template_ylryrew',
        templateParams,
        'c5ogHx40RwXBqPNLI'
      ).then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setIsLoading(false); // Set loading to false when form submission is successful

        setSuccessMessage('Thanks For Showing Interest to Join With Us. Your details have been sent. We will contact you shortly.');
      }, (error) => {
        console.log(error.text);
        setIsLoading(false);
        alert('There was an issue in our Server. We are working on it. Please try again later.');

      });
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('There was an issue in our Server. We are working on it. Please try again later.');

    }
  };

  

  return (

    <>
        {!isSubmitted ? (
          <form className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">First Name:</label>
          <input type="text" name="firstname" className="form-input" value={formData.firstname} onChange={handleChange} required />
    
          <label className="form-label">Last Name:</label>
          <input type="text" name="lastname" className="form-input" value={formData.lastname} onChange={handleChange} required />
    
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
    
          <label className="form-label">Phone:</label>
          <input type="text" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required />
    
          <label className="form-label">Message:</label>
          <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} required />
    
          <label className="form-label">Resume:</label>
          
          <input
            id='file-input'
            style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                color: '#555',
                cursor: 'pointer',
                outline: 'none',
                font: 'inherit'
            }}
            type="file" name="resume" className="form-input" onChange={handleChange}  required accept=".pdf,.doc,.docx" />
    

          <label
          className="form-label">CV:</label>
          <input 
            style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                color: '#555',
                cursor: 'pointer',
                outline: 'none',
                font: 'inherit'
            }}
           type="file" name="cv" className="form-input" onChange={handleChange} required accept=".pdf,.doc,.docx" />
    
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
      ):
      (
      <div className="success-popup">
        <p>{successMessage}</p>
      </div>
      )}
    
    
    </>
    
  );
};

export default Form;
