import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faShieldAlt, faArrowsAltV, faPlusCircle, faUserShield, faCogs, faBolt } from '@fortawesome/free-solid-svg-icons';
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

function Vps() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
      icon: faPlusCircle,
      title: 'Powerful VPS Add-ons',
      text: 'Secure your data with Acronis solutions for cloud backup, protection, and recovery. Expand your SSD storage from 10GB to 500GB starting at ₹15/GB per month.',
    },
    {
      icon: faUserShield,
      title: 'Full Root Access for Users',
      text: 'Gain full root access to install custom software and manage your VPS with features like Rebuild, VNC, Restart, and Resource Monitoring.',
    },
    {
      icon: faCogs,
      title: 'Integrated cPanel for VPS',
      text: 'Our VPS servers feature high-performance computing, SSD storage, and optimized virtualization for rock-solid performance.',
    },
    {
      icon: faBolt,
      title: 'Near-Instant Provisioning',
      text: 'Get your server running in minutes with no setup fees. Experience near-instant provisioning compared to traditional VPS providers.',
    },
    {
      icon: faTools,
      title: 'Fully Managed',
      text: 'Enjoy hassle-free hosting with our fully managed VPS service, where we handle all server configuration and updates.',
    },
    {
      icon: faShieldAlt,
      title: 'Secure Data Protection',
      text: 'Protect your data with robust security measures, regular backups, and advanced encryption for peace of mind.',
    },
    {
      icon: faArrowsAltV,
      title: 'Seamless Scalability',
      text: 'Easily scale your resources to accommodate your growing business needs and traffic demands with our flexible VPS plans.',
    },
  ];

  const plansData = [
    {
      title: 'Business Starter',
      price: 3999,
      discount: 10, // 10% discount
      details: [
        '4 Core CPU',
        '8 GB RAM',
        '80 GB SSD',
        '4 TB Bandwidth',
        '1 Free Dedicated IP',
        'Free Website Migration',
      ],
      popular: true,
      headerColor: 'bg-primary',
    },
    {
      title: 'Business Standard',
      price: 4999,
      discount: 15, // 15% discount
      details: [
        '4 Core CPU',
        '12 GB RAM',
        '100 GB SSD',
        '6 TB Bandwidth',
        '1 Free Dedicated IP',
        'Free Website Migration',
      ],
      headerColor: 'bg-success',
    },
    {
      title: 'Business Plus',
      price: 7399,
      discount: 20, // 20% discount
      details: [
        '6 Core CPU',
        '16 GB RAM',
        '150 GB SSD',
        '8 TB Bandwidth',
        '1 Free Dedicated IP',
        'Free Website Migration',
      ],
      headerColor: 'bg-warning',
    },
    {
      title: 'Enterprise',
      price: 'Contact us',
      details: [
        '6 Core CPU',
        '32 GB RAM',
        '200 GB SSD',
        '16 TB Bandwidth',
        '2 Free Dedicated IPs',
        'Free Website Migration',
      ],
      headerColor: 'bg-danger',
    },
  ];

  const Imagedata = [
    {
      heading: 'Expertise',
      description: 'Our VPS Hosting services provide unparalleled reliability and performance to help businesses grow effectively.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description: 'Get 24/7 expert support for any issues related to your VPS hosting or server configuration.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'We ensure seamless migration and implementation of your VPS hosting with no downtime.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is VPS Hosting, and how does it work?',
      answer: 'VPS Hosting uses virtualization technology to provide dedicated resources within a shared server. It offers greater control and flexibility compared to shared hosting.',
    },
    {
      question: 'What are the advantages of VPS Hosting?',
      answer: 'VPS Hosting provides full root access, faster load times, enhanced security, and scalable resources to handle growing website traffic.',
    },
    {
      question: 'Can I customize my VPS server?',
      answer: 'Yes, with full root access, you can customize your VPS server to install software, configure settings, and optimize performance.',
    },
    {
      question: 'What is the difference between Shared Hosting and VPS Hosting?',
      answer: 'Shared Hosting involves multiple websites sharing the same resources, while VPS Hosting provides dedicated resources for improved performance and control.',
    },
    {
      question: 'Is VPS Hosting secure?',
      answer: 'Yes, VPS Hosting is secure with advanced encryption, regular backups, and robust firewalls to protect your data.',
    },
    {
      question: 'How do I scale my VPS resources?',
      answer: 'You can easily upgrade your VPS plan or add more resources, such as CPU, RAM, and storage, based on your requirements.',
    },
    {
      question: 'Do you provide fully managed VPS Hosting?',
      answer: 'Yes, our fully managed VPS Hosting takes care of server configuration, updates, and maintenance, allowing you to focus on your business.',
    },
    {
      question: 'How quickly can my VPS be set up?',
      answer: 'Our VPS Hosting is provisioned almost instantly, so you can start using your server without delays.',
    },
    {
      question: 'Do you offer 24/7 support for VPS Hosting?',
      answer: 'Yes, our expert support team is available 24/7 to assist you with any VPS hosting-related issues.',
    },
    {
      question: 'How can I migrate my existing website to VPS Hosting?',
      answer: 'We offer free website migration services to transfer your existing website to our VPS Hosting platform seamlessly.',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero 
        sName="sub-hero" 
        sText="High-Performance VPS Hosting"
        subtitle="Full Root Access | Integrated cPanel for VPS Hosting"
        paragraph="Get premium VPS Hosting with unmatched speed and scalability for your growing business."
      />
      <Pricing plans={plansData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose VPS Hosting?</h2>
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
      <BuildWebsiteCTA title="Get Started with VPS Hosting Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with VPS Hosting?" />
    </>
  );
}

export default withSEO(
  Vps,
  'VPS Hosting: Buy Best VPS Hosting Plans in Hyderabad | VR2 Technologies',
  'VPS hosting, buy VPS hosting plans, best VPS hosting Hyderabad, managed VPS hosting, scalable VPS hosting, secure VPS servers, fast VPS hosting, root access VPS, affordable VPS hosting plans, SSD VPS hosting, reliable VPS hosting in Hyderabad',
  'Discover the best VPS hosting plans in Hyderabad with VR2 Technologies. Get managed VPS hosting with SSD storage, full root access, and 24/7 support to power your growing business.'
);
