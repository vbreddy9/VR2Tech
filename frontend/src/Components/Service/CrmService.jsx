import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faPlug,
  faLock,
  faThumbsUp,
  faUniversity,
  faBuilding,
  faMoneyBillAlt,
  faUtensils,
  faHardHat,
  faHandsHelping,
  faSeedling,
  faCapsules,
  faDesktop,
  faTools,
  faCut,
  faHandHoldingHeart,
  faCalculator,
  faCar,
  faUserTie,
  faHammer,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';
import SubHero from '../SubHero';
import AboutPage from '../AboutPage';
import AutoPopup from '../AutoPopup';
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

function CrmService() {
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
    title: 'CRM - Uniquely Designed for Growing Businesses',
    text: 'VR2Tech, an authorized CRM provider, streamlines your lead management process. All your lead records are consolidated in one place. Communication is contextual and automated. Your team collaborates seamlessly and stays on top of follow-ups and tasks. Timely notifications and reminders keep you informed about your team’s activities. Achieve your revenue targets effortlessly!',
    bulletPoints: [
      'Unlimited Users: Collaborate freely with no user limitations.',
      'Easy to Use: Intuitive interface for seamless navigation.',
      'Quick Onboarding: Get started swiftly with our guided setup.',
      'Free 15-Day Trial: Experience our CRM at no cost.',
      'No Credit Card Needed: Sign up hassle-free, no payment info required.',
    ],
    imageUrl: FirstImage,
    altText: 'CRM Image',
  };

  const cardData = [
    {
      icon: faCogs,
      title: 'Easy Customizations',
      text: 'Businesses can customize CRM as per their unique business needs. Set up workflows, fields, pipelines, and layouts to fit your business context.',
    },
    {
      icon: faPlug,
      title: 'Seamless Integrations',
      text: 'Integrate CRM with 50+ popular tools/apps. Use Webhooks and APIs to gather customer data seamlessly in CRM.',
    },
    {
      icon: faLock,
      title: 'Data Security',
      text: 'Control what users can view, edit, or export. Create teams and set data-sharing rules to ensure data security.',
    },
    {
      icon: faThumbsUp,
      title: 'Easy to Use',
      text: 'Our CRM is easy to use, even for beginners. Sales teams across industries love the intuitive interface and quick adoption.',
    },
  ];

  const cardInfo = [
    { title: 'Education', icon: faUniversity },
    { title: 'Real Estate', icon: faBuilding },
    { title: 'Accounting', icon: faCalculator },
    { title: 'Automotive', icon: faCar },
    { title: 'Consultancy', icon: faUserTie },
    { title: 'Services', icon: faHammer },
    { title: 'Finance', icon: faMoneyBillAlt },
    { title: 'Hospitality', icon: faUtensils },
    { title: 'Construction', icon: faHardHat },
    { title: 'Insurance', icon: faHandsHelping },
    { title: 'Agriculture', icon: faSeedling },
    { title: 'Pharmaceuticals', icon: faCapsules },
    { title: 'IT/ITEs', icon: faDesktop },
    { title: 'Machinery Services', icon: faTools },
    { title: 'Cosmetology', icon: faCut },
    { title: 'Not for Profit', icon: faHandHoldingHeart },
  ];

  const Imagedata = [
    {
      heading: 'Expertise',
      description: 'We provide comprehensive CRM services to help businesses grow effectively.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description: 'Our CRM experts provide 24/7 support for setup, usage, and integrations.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'We ensure seamless CRM implementation and onboarding for your team.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is a CRM, and why do I need it?',
      answer: 'CRM (Customer Relationship Management) software helps businesses manage interactions, streamline lead tracking, and improve customer relationships.',
    },
    {
      question: 'What industries can use CRM solutions?',
      answer: 'CRM is versatile and can be used by industries like Education, Real Estate, Finance, IT, Hospitality, Healthcare, and more.',
    },
    {
      question: 'Is CRM customizable?',
      answer: 'Yes, CRM is highly customizable to fit your business needs, workflows, and team requirements.',
    },
    {
      question: 'Can I integrate CRM with other tools?',
      answer: 'Absolutely! CRM integrates with tools like email, marketing automation, and analytics platforms for enhanced functionality.',
    },
    {
      question: 'Is my data secure in CRM?',
      answer: 'Yes, CRM solutions include advanced encryption, access controls, and backup protocols to ensure data security.',
    },
    {
      question: 'How quickly can I onboard my team to CRM?',
      answer: 'With guided onboarding, your team can start using CRM effectively within days.',
    },
    {
      question: 'Do I need technical expertise to use CRM?',
      answer: 'No, CRM is designed to be user-friendly, and our support team is always available to assist.',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Enterprise-grade CRM Designed For Your Business" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Why CRM is the Right Choice for Your Industry?</h2>
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
      <h2 className="text-center mb-5">Fits Every Use Case</h2>
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
      <BuildWebsiteCTA title="Is the Right CRM Solution for You?" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with CRM?" />
    </>
  );
}

export default withSEO(
  CrmService,
  'CRM Solutions: Tailored CRM for Growing Businesses | VR2 Technologies',
  'CRM software, business growth, customizable CRM, CRM for small businesses, industry-specific CRM, secure CRM, scalable CRM, CRM for startups, CRM for enterprises, CRM in Hyderabad, affordable CRM solutions, top CRM provider in Hyderabad, CRM features, easy CRM onboarding',
  'Discover top-notch CRM solutions tailored for growing businesses. Customize workflows, secure data, and integrate seamlessly with existing tools. Perfect for startups and enterprises.'
);
