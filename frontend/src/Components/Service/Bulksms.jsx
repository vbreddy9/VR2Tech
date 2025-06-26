import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartLine, faLink, faMapMarkerAlt, faBullhorn, faUpload, faEnvelopeOpen, faDollarSign } from '@fortawesome/free-solid-svg-icons'; // Importing solid icons
import Navbar from '../Navbar';
import SubHero from '../SubHero';
import AboutPage from '../AboutPage';
import marketingImage from '../../assets/Marketing.jpeg';
import BuildWebsiteCTA from '../BuildWebsiteCTA';
import Footer from '../Footer';
import ContactPage from '../ContactPage';
import withSEO from '../../HOC/withSEO';
import ScrollButton from '../ScrollButton';
import ChatWidget from '../ChatWidget';
import AutoPopup from '../AutoPopup';
import ImageWithDetails from '../ImageWithDetails';

import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function Bulksms () {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  // State to control the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Use effect to show the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const aboutData = {
    number: '1',
    title: 'Accelerate Sales and Customer Engagement with SMS Plans and APIs ',
    text: (
      <>
      Enhance your sales and customer interaction with our comprehensive SMS campaigns and API integration solutions. 
      Trusted by industry leaders like Apollo and Happay, MyOperator offers powerful tools to elevate your business communication. <br></br><br></br>Switch to power-packed SMS solution features for multiple business communication objectives.
      </>
    ),
    bulletPoints: [
      'Integrate SMS with IVR and Missed Call Campaigns',
      'Boost Sales with Bulk SMS Campaigns.',
      'Integrate SMS APIs with Any Business App.',
      'Send Transactional SMS with OTP Verification.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };
  
  // Card data for the first row
  const cardData = [
    {
      icon: faGlobe,
      title: 'IVR Integration',
      text:
        "Our SMS APIs let you integrate IVR and SMS for after-call engagement.",
    },
    {
      icon: faChartLine,
      title: 'Bulk Outreach',
      text:
        'Send text messages to thousands of people in just a few seconds.',
    },
    {
      icon: faLink,
      title: 'SMS APIs',
      text:
        'Send SMS notifications such as OTP or order status from any app with our powerful APIs.',
    },
    {
      icon: faMapMarkerAlt, 
      title: 'Performance Reports',
      text:
        'Get detailed reports of SMS campaign performance in real-time.',
    },
    {
      icon: faBullhorn, 
      title: 'Schedule Campaign',
      text:
        'Save, upload, and schedule your campaigns beforehand to be sent later.',
    },
    {
      icon: faUpload, 
      title: 'Missed Calls + SMS',
      text:
        'Plan missed calls + automated SMS engagement with our easy virtual numbers.',
    },
    {
      icon: faEnvelopeOpen, 
      title: 'Easy Uploads',
      text:
        'Upload the database in any format with no restriction on the size of the list.',
    },
    {
      icon: faEnvelopeOpen, 
      title: 'High Open-Rate',
      text:
        'SMS campaigns have an almost 98% open rate ensuring high readability.',
    },
    {
      icon: faDollarSign, 
      title: 'Affordable',
      text:
        'Start your SMS campaign for as low as (price).',
    },
  ];

  const Imagedata = [
    {
      heading: 'Expertise',
      description: 'We provide comprehensive IT services to help grow your business and achieve effective results.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description: 'Our SEO specialists handle all your campaigns, focusing on on-page and off-page SEO to make sure your audience finds you online',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'Our SEO experts analyze campaign results to ensure optimal performance.',
      image: ThirdImage,
    },
  ];
  // FAQ Data
  const faqs = [
    {
      question: 'What are Bulk SMS services and how do they work?',
      answer: 'Bulk SMS services enable businesses to send a large volume of text messages simultaneously to their audience. These services are commonly used for promotional campaigns, alerts, notifications, and customer engagement, offering a direct and effective communication channel.'
    },
    {
      question: 'What are the business benefits of using Bulk SMS services?',
      answer: 'Bulk SMS services help businesses improve customer engagement, boost sales, and maintain consistent communication with their audience. Personalized messages and targeted campaigns enhance user experience, driving higher customer retention and ROI.'
    },
    {
      question: 'How quickly can I send messages using Bulk SMS services?',
      answer: 'With Bulk SMS services, you can send thousands of messages instantly. Delivery is typically completed within seconds or minutes, ensuring real-time communication and responsiveness.'
    },
    {
      question: 'Can I track the success of my Bulk SMS campaigns?',
      answer: 'Yes, Our Bulk SMS platform provide detailed analytics and performance reports. Metrics like delivery rates, click-through rates, and responses are tracked to help you optimize your campaigns effectively.'
    },
    {
      question: 'Are Bulk SMS services cost-effective for marketing?',
      answer: 'Absolutely, Bulk SMS campaigns are highly affordable and offer excellent ROI compared to traditional advertising methods. They’re scalable and allow you to reach a vast audience at a fraction of the cost.'
    },
    {
      question: 'Is there a limit on how many messages I can send with Bulk SMS services?',
      answer: 'No, Bulk SMS services allow you to send unlimited messages depending on your plan. You can reach thousands or even millions of recipients based on your campaign needs.'
    },
    {
      question: 'Can I customize messages in Bulk SMS campaigns?',
      answer: 'Yes, Bulk SMS services support personalization. You can include dynamic content like customer names, special offers, or other tailored information to create more engaging and effective messages.'
    },
    {
      question: 'How secure is Bulk SMS for business communication?',
      answer: 'Bulk SMS services use advanced security protocols, including data encryption, to protect customer information and ensure compliance with privacy standards. This makes it a secure option for business communication.'
    },
    {
      question: 'Can Bulk SMS be used for OTP and transactional messages?',
      answer: 'Yes, Bulk SMS services are ideal for sending OTPs and transactional messages. These are commonly used for secure logins, account verification, and order confirmations, ensuring swift and reliable communication.'
    },
    {
      question: 'How can I start using Bulk SMS services for my business?',
      answer: 'Starting with Bulk SMS is simple. We provide reliable service, choose a suitable plan, and use our platform to create, schedule, and monitor your SMS campaigns for maximum impact.'
    }
  ];
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Trust The Experience. Endorsed By Customers And Experts." />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h3 className="text-center mb-5">Choose SMS Services For Affordable, Fast Outreach.</h3>
        {/* First Row - Map through cardData array to generate cards */}
        <div className="row justify-content-center gy-5">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={card.icon} className="fa-4x mb-3" style={{ marginRight: '10px', color: 'brown' }} />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-center mb-5">What we are.</h3>
      <ImageWithDetails data={Imagedata}/>
      
      {/* FAQ Section */}
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
            <h3 className="faq-question" onClick={() => toggleFaq(index)}>
              <span className="faq-number">{index + 1}. </span>
              {faq.question}
              <span className="faq-icon">{openFaqIndex === index ? '-' : '+'}</span>
            </h3>
            {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      {/* FAQ Section */}
      <BuildWebsiteCTA title="Get Started with Our SEO Services Today!" />
      <ContactPage />
      <ScrollButton/>
      <ChatWidget/>
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Google Workspace?"  />
    </>
  );
}

export default withSEO(Bulksms, 'Best Bulk SMS Services | VR2 Technologies', 
  'bulk SMS services, SMS marketing, SMS APIs, business communication, customer engagement, bulk SMS campaigns, transactional SMS, affordable SMS solutions, high open rate SMS, SMS for business, SMS notifications, SMS performance reports, VR2 Technologies', 'bulk SMS services, SMS marketing, business SMS solutions, affordable bulk SMS, SMS campaigns, SMS APIs for business, customer engagement with SMS, high open rate messages, SMS notifications, transactional SMS, VR2 Technologies SMS services');
