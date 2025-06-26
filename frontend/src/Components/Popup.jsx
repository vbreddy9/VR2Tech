import React, { useState, useEffect } from 'react';
import './Popup.css';
import seoImage from '../assets/seo.jpeg';

const Popup = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [result, setResult] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [submissionTime, setSubmissionTime] = useState('');

  useEffect(() => {
    setPageTitle(document.title || 'Lead Form');
    setSubmissionTime(new Date().toLocaleString());
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    if (name && email && mobile && termsChecked) {
      const payload = {
        name,
        email,
        mobile,
        message: `Plan Selected: ${plan || 'No message provided'}`,
        webpage_url: window.location.href,
        page_title: pageTitle,
        submission_datetime: submissionTime
      };

      try {
        const response = await fetch('http://localhost:5000/home/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
          setResult('Form Submitted Successfully');
          event.target.reset();
          window.open('/thank-you', '_blank');
          onClose();
        } else {
          setResult(data.error || 'Something went wrong.');
        }
      } catch (error) {
        setResult('Failed to submit. Please try again later.');
        console.error(error);
      }
    } else {
      alert('Please fill in all fields and agree to the Terms & Conditions.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <button className="close-button" onClick={onClose}>x</button>
          <h2>Book an Appointment</h2>
          <p>Fill in the details and we'll get in touch</p>
        </div>
        <div className="popup-body">
          <div className="popup-left">
            <img src={seoImage} alt="Help" className="popup-image" />
          </div>
          <div className="popup-right">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
              <label htmlFor="terms">
                <input type="checkbox" id="terms" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} required />
                I agree to the &nbsp;<a href="https://vr2tech.in/terms-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
              </label>
              <button type="submit">Submit</button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
