import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUserCog, faDatabase, faEnvelope, faBalanceScale, faShieldAlt, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';
import SubHero from '../SubHero';
import BuildWebsiteCTA from '../BuildWebsiteCTA';
import Footer from '../Footer';
import ContactPage from '../ContactPage';
import withSEO from '../../HOC/withSEO';
import ScrollButton from '../ScrollButton';
import ChatWidget from '../ChatWidget';
import Pricing from '../Pricing';
import AutoPopup from '../AutoPopup';
import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function Shared() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // State to track which FAQ is open

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cardData = [
    {
      icon: faServer,
      title: 'Cutting-edge Infrastructure',
      text: 'Our Shared Hosting uses top-tier servers with Intel Xeon-E5 CPUs and HyperThreading for unbeatable uptime.',
    },
    {
      icon: faUserCog,
      title: 'User-Friendly cPanel',
      text: 'Each shared Linux hosting package includes a user-friendly Control Panel, allowing effortless website creation and management.',
    },
    {
      icon: faDatabase,
      title: 'Advanced Web Dev & Databases',
      text: 'Craft your website with top-tier programming tools like PHP, Apache, Python, MySQL, and more.',
    },
    {
      icon: faEnvelope,
      title: 'Professional Email Hosting',
      text: 'Experience enhanced email management with our solution, offering unlimited POP3 accounts and robust spam protection.',
    },
    {
      icon: faBalanceScale,
      title: 'Efficient Resource Allocation',
      text: 'Optimize your website\'s performance with efficient resource allocation for smooth operations.',
    },
    {
      icon: faShieldAlt,
      title: 'Secure Data Protection',
      text: 'Safeguard your website\'s data with robust security measures, including regular backups and advanced encryption.',
    },
    {
      icon: faArrowsAltV,
      title: 'Seamless Scalability',
      text: 'Expand your online presence with scalability to accommodate growing website traffic and resource needs.',
    },
  ];

  const plansData = [
    {
      title: 'Business Starter',
      price: 469,
      discount: 20,
      details: [
        'Single Domain',
        '20 GB SSD Disk Space',
        '100 GB Transfer',
        '5 Email Account(s)',
        'Unlimited Databases',
        'Free Let\'s Encrypt SSL',
      ],
      popular: true,
      headerColor: 'bg-primary',
    },
    {
      title: 'Business Standard',
      price: 575,
      discount: 15,
      details: [
        'Single Domain',
        'Unlimited SSD Disk Space',
        'Unlimited Transfer',
        'Unlimited Email Account(s)',
        'Unlimited Databases',
        'Free Let\'s Encrypt SSL',
        'Free Domain for 1 Year',
      ],
      headerColor: 'bg-success',
    },
    {
      title: 'Business Plus',
      price: 765,
      discount: 10,
      details: [
        'Unlimited Domains',
        'Unlimited SSD Disk Space',
        'Unlimited Transfer',
        'Unlimited Email Account(s)',
        'Unlimited Databases',
        'Free Let\'s Encrypt SSL',
        'Free Domain for 1 Year',
      ],
      headerColor: 'bg-warning',
    },
    {
      title: 'Enterprise',
      price: 'Contact us',
      details: [
        'Unlimited Domains',
        'Unlimited SSD Disk Space',
        'Unlimited Transfer',
        'Unlimited Email Account(s)',
        'Unlimited Databases',
        'Free Premium SSL for 1 Year',
        'Free Domain for 1 Year',
        'Free Dedicated IP for 1 Year',
      ],
      headerColor: 'bg-danger',
    },
  ];

  const Imagedata = [
    {
      heading: 'Expertise',
      description: 'Our Shared Hosting services offer reliability and scalability to help grow your business effectively.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description: 'Get 24/7 expert support for your hosting needs and website management issues.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'We ensure smooth onboarding and configuration of your shared hosting plans.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is Shared Hosting?',
      answer: 'Shared Hosting is a web hosting service where multiple websites share the same server resources, making it a cost-effective solution for small businesses.',
    },
    {
      question: 'What are the benefits of Shared Hosting?',
      answer: 'Shared Hosting is affordable, easy to manage, and provides sufficient resources for small to medium-sized websites.',
    },
    {
      question: 'Is Shared Hosting secure?',
      answer: 'Yes, our Shared Hosting plans include advanced encryption, regular backups, and robust firewalls for security.',
    },
    {
      question: 'Can I upgrade my Shared Hosting plan later?',
      answer: 'Yes, our Shared Hosting plans are scalable, allowing you to upgrade as your business grows.',
    },
    {
      question: 'What is included in Shared Hosting plans?',
      answer: 'Our Shared Hosting plans include SSD storage, email accounts, cPanel access, free SSL certificates, and one-click script installers.',
    },
    {
      question: 'Is Shared Hosting suitable for eCommerce websites?',
      answer: 'Shared Hosting is ideal for small eCommerce websites. For high-traffic eCommerce sites, consider VPS or Cloud Hosting.',
    },
    {
      question: 'Can I manage my website through cPanel?',
      answer: 'Yes, all our Shared Hosting plans include a user-friendly cPanel for website management.',
    },
    {
      question: 'What kind of support is available?',
      answer: 'We provide 24/7 expert support to assist you with any hosting-related issues.',
    },
    {
      question: 'Can I transfer my existing website to your Shared Hosting?',
      answer: 'Yes, we offer free website migration services to transfer your existing website seamlessly.',
    },
    {
      question: 'How do I get started with Shared Hosting?',
      answer: 'Simply choose a plan, sign up, and let us handle the rest. Your hosting will be set up in minutes.',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero
        sName="sub-hero"
        sText="Most Reliable Linux Shared Hosting"
        subtitle="One-click Script Installs | Automatic Backups | Easy Domain Management"
        paragraph="Get fast, reliable Linux Shared Hosting for your growing website needs."
      />
      <Pricing plans={plansData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose Linux Shared Hosting?</h2>
        <div className="row justify-content-center gy-5">
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
      <h3 className="text-center mb-5">What we are.</h3>
      <ImageWithDetails data={Imagedata} />
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
      <BuildWebsiteCTA title="Get Started with Shared Hosting Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Shared Hosting?" />
    </>
  );
}

export default withSEO(
  Shared,
  'Linux Shared Hosting: Buy Reliable Shared Hosting in Hyderabad | VR2 Technologies',
  'shared hosting, buy shared hosting, Linux shared hosting Hyderabad, affordable shared hosting, reliable hosting providers, shared hosting plans, managed shared hosting, scalable hosting plans, cPanel hosting, free SSL hosting, fast Linux hosting, shared hosting Hyderabad',
  'Find the best Linux shared hosting plans in Hyderabad with VR2 Technologies. Get affordable, reliable, and secure hosting solutions with cPanel, free SSL, and 24/7 support.'
);
