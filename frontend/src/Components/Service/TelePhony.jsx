import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUniversity, faBuilding, faMoneyBillAlt, faUtensils, faHardHat, faHandsHelping, faSeedling, faCapsules, faDesktop, faTools, faCut, faHandHoldingHeart, faCalculator, faCar, faUserTie, faHammer } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';
import AutoPopup from '../AutoPopup';
import SubHero from '../SubHero';
import AboutPage from '../AboutPage';
import marketingImage from '../../assets/myoperator.webp';
import BuildWebsiteCTA from '../BuildWebsiteCTA';
import Footer from '../Footer';
import ContactPage from '../ContactPage';
import withSEO from '../../HOC/withSEO';
import ScrollButton from '../ScrollButton';
import ChatWidget from '../ChatWidget';
import IndustryCards from '../IndustryCards';
import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function TelePhony() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 5000); 
      return () => clearTimeout(timer);
    }, []);

  const aboutData = {
    number: '1',
    title: 'Reimagine Business Communication At Scale',
    text:
      'VR2Tech, an authorized IVR & Cloud Telephony provider, empowers your business with a cutting-edge, no-code SaaS platform designed to supercharge customer engagement and enterprise communication. Our scalable customer contact center technology seamlessly processes millions of conversations, ensuring swift and effective interactions.',
    bulletPoints: [
      'Capture sales leads and conversations.',
      'Monitor every conversation for customer service.',
      'Get feedback through AI-powered analytics.',
      'Integrate with your favorite CRM and enterprise tools.',
      'Easy-to-use intuitive interface for seamless navigation.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };

  const cardInfo = [
    { title: "Education", icon: faUniversity },
    { title: "Real Estate", icon: faBuilding },
    { title: "Accounting", icon: faCalculator },
    { title: "Automotive", icon: faCar },
    { title: "Consultancy", icon: faUserTie },
    { title: "Services", icon: faHammer },
    { title: "Finance", icon: faMoneyBillAlt },
    { title: "Hospitality", icon: faUtensils },
    { title: "Construction", icon: faHardHat },
    { title: "Insurance", icon: faHandsHelping },
    { title: "Agriculture", icon: faSeedling },
    { title: "Pharmaceuticals", icon: faCapsules },
    { title: "IT/ITEs", icon: faDesktop },
    { title: "Machinery Services", icon: faTools },
    { title: "Cosmetology", icon: faCut },
    { title: "Not for Profit", icon: faHandHoldingHeart },
  ];

  const cardData = [
    {
      icon: faMoneyBillAlt,
      title: 'Sales',
      text: "Automate sales calls, integrate with any CRM, and deploy remote sales teams in minutes. Improve sales by 30%.",
    },
    {
      icon: faHandsHelping,
      title: 'Support',
      text: 'Manage your customer contact center on IVR Services and grow customer delight by 50%.',
    },
    {
      icon: faThumbsUp,
      title: 'Employee Engagement',
      text: 'Automate your hiring and employee communication, integrating with major ATS on our software.',
    },
    {
      icon: faDesktop,
      title: 'Marketing Automation',
      text: 'Attract and retain more customers with 360-degree campaign management, integrating voice, SMS, and WhatsApp.',
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
      description: 'Our SEO specialists handle all your campaigns, focusing on on-page and off-page SEO to ensure online visibility.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'Our SEO experts analyze campaign results to ensure optimal performance.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is Cloud Telephony?',
      answer: 'Cloud telephony enables businesses to manage calls over the internet, ensuring seamless communication without traditional hardware.',
    },
    {
      question: 'How does IVR benefit businesses?',
      answer: 'IVR (Interactive Voice Response) automates customer interactions, enhancing call handling and customer experience.',
    },
    {
      question: 'Can IVR integrate with my CRM?',
      answer: 'Yes, IVR integrates seamlessly with popular CRMs to streamline lead tracking and customer communication.',
    },
    {
      question: 'What industries can use Cloud Telephony?',
      answer: 'Cloud telephony is versatile and used across industries such as education, real estate, finance, healthcare, and more.',
    },
    {
      question: 'How secure is Cloud Telephony?',
      answer: 'Cloud telephony employs advanced encryption and security protocols to protect sensitive data and communication.',
    },
    {
      question: 'What is the ROI for using IVR services?',
      answer: 'Businesses often see a significant increase in efficiency, customer satisfaction, and sales, with up to a 30% boost in ROI.',
    },
  ];
  

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="All-in-One Calls + WhatsApp" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Take the Right Choice for Your Industry</h2>
        <div className="row gy-5">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={card.icon} className="fa-4x mb-3" style={{ color: 'brown' }} />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h2 className="text-center my-5">Fits Every Use Case</h2>
      <div className="container my-5">
        <IndustryCards cards={cardInfo} />
      </div>
          
      <h3 className="text-center mb-5">What We Are</h3>
      <ImageWithDetails data={Imagedata} />
      
      <div className="faq-container container">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item mb-3 ${openFaqIndex === index ? 'open' : ''}`}>
            <h3 className="faq-question" onClick={() => toggleFaq(index)} style={{ cursor: 'pointer' }}>
              <span className="faq-number">{index + 1}. </span>
              {faq.question}
              <span className="faq-icon">{openFaqIndex === index ? '-' : '+'}</span>
            </h3>
            {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <BuildWebsiteCTA title="Experience the IVR & Cloud Telephony Advantage" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Cloud Telephony?" />
    </>
  );
}

export default withSEO(
  TelePhony,
  'IVR & Cloud Telephony Call+WhatsApp Communication | VR2 Technologies',
  'IVR services, cloud telephony provider, business communication solutions, telephony automation, scalable CRM integration, call center technology, WhatsApp integration, customer engagement tools, VR2 Technologies telephony services, telephony for businesses, CRM telephony solutions, telephony in Hyderabad, top telephony provider Hyderabad',
  'Discover why VR2 Technologies is the leading IVR & Cloud Telephony provider in Hyderabad. Enhance business communication with scalable telephony solutions integrated with CRM and enterprise tools.'
);
