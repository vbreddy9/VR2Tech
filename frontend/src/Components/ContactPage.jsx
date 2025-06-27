import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';
import call from '../assets/call.jpeg';
import map from '../assets/location.jpeg';
import mail from '../assets/email.jpeg';
import msg from '../assets/msg.png';

function ContactPage() {
  const [result, setResult] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+91',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setPageTitle(document.title || 'Contact Form');
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('IP Fetch Error:', error));
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.match(/^[0-9]{7,15}$/)) newErrors.phone = 'Enter valid phone number';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Enter valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: `${formData.countryCode}${formData.phone}`,
      message: formData.message,
      webpage_url: window.location.href,
      page_title: pageTitle,
      ip_address: ipAddress,
      submission_datetime: new Date().toLocaleString()
    };

    try {
      setResult('Sending...');
      const response = await fetch('https://vr-2-tech-frontend.vercel.app/api/home/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (response.ok) {
        setResult('Form Submitted Successfully');
        navigate('/thank-you');
      } else {
        setResult('Submission failed. Please try again.');
        console.error(data);
      }
    } catch (error) {
      setResult('Something went wrong.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='container contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg} alt='message' /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below.</p>
        <ul>
          <li><img src={mail} alt='mail' /><a href='mailto:info@vr2tech.in'>info@vr2tech.in</a></li>
          <li><img src={call} alt='call' /><a href='tel:+918309436998'>+91-83094 36998</a></li>
          <li><img src={map} alt='location' />Plot No 11/8, Malika Complex, Shamshabad, Telangana, India - 501218</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={handleSubmit} noValidate>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className='error'>{errors.name}</span>}

          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className='error'>{errors.email}</span>}

          <label>Phone Number</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select
              name='countryCode'
              value={formData.countryCode}
              onChange={handleChange}
              style={{ width: '120px', marginRight: '10px' }}
            >
              <option value='+91'>IND +91</option>
              <option value='+1'>US +1</option>
              <option value='+44'>UK +44</option>
              <option value='+61'>AU +61</option>
            </select>
            <input
              type='tel'
              name='phone'
              placeholder='Enter your mobile'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {errors.phone && <span className='error'>{errors.phone}</span>}

          <label>Your Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className='error'>{errors.message}</span>}

          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactPage;
