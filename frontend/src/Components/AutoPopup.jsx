import React, { useState, useEffect } from 'react';
import './AutoPopup.css';
import seoImage from '../assets/seo.jpeg';

const AutoPopup = ({ isOpen, onClose, title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [result, setResult] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [submissionTime, setSubmissionTime] = useState('');

  useEffect(() => {
    setPageTitle(document.title || 'Appointment Page');
    setSubmissionTime(new Date().toLocaleString());
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!name || !email || !mobile || !termsChecked) {
      alert('Please fill in all fields and agree to the Terms & Conditions.');
      setResult('');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      setResult('');
      return;
    }

    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number starting with 6-9.');
      setResult('');
      return;
    }

    const payload = {
      name,
      email,
      mobile,
      message: title ? `Plan Selected: ${title}` : 'Popup Form Submission',
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
        setResult(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('Submission failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <button className="close-button" onClick={onClose}>x</button>
          <h2>{title || 'Book an Appointment'}</h2>
          <p>Fill in the details and we'll get in touch</p>
        </div>
        <div className="popup-body">
          <div className="popup-left">
            <img src={seoImage} alt="Help" className="popup-image" />
          </div>
          <div className="popup-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <label htmlFor="terms">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  required
                />
                I agree to the{' '}
                <a
                  href="https://vr2tech.in/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
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

export default AutoPopup;
