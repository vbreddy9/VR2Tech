import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUserCog, faHdd, faTools, faMemory, faShieldAlt, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
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

function Cloud() {
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
      icon: faServer,
      title: 'Cutting-edge Infrastructure',
      text: 'Our Cloud Hosting uses top-tier servers with Intel Xeon-E5 CPUs and HyperThreading for unbeatable uptime.',
    },
    {
      icon: faUserCog,
      title: 'User-Friendly Control Panel',
      text: 'Each hosting package includes an easy-to-use Control Panel, enabling effortless website creation and management.',
    },
    {
      icon: faHdd,
      title: 'Powerful SSD Storage',
      text: 'Accelerate your business with high-performance SSD hosting servers for lightning-fast website load times.',
    },
    {
      icon: faMemory,
      title: 'Pre-Integrated Caching',
      text: 'Our cloud hosting servers feature pre-integrated caching for optimal performance and lightning-fast page loading.',
    },
    {
      icon: faTools,
      title: 'Fully Managed',
      text: 'Enjoy hassle-free hosting. We handle server configuration and updates so you can focus on your website.',
    },
    {
      icon: faShieldAlt,
      title: 'Secure Data Protection',
      text: "Keep your data safe with robust security measures, including regular backups and advanced encryption.",
    },
    {
      icon: faArrowsAltV,
      title: 'Seamless Scalability',
      text: 'Effortlessly scale your hosting as your business grows, with resources that adapt to your traffic demands.',
    },
  ];

  const plansData = [
    {
      title: 'Basic Plan',
      price: 799,
      discount: 10, // 10% discount
      details: [
        '1 Domain',
        '10 GB SSD Storage',
        '2 GB RAM',
        '2 Cores',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
      ],
      popular: false,
      headerColor: 'bg-primary',
    },
    {
      title: 'Standard Plan',
      price: 999,
      discount: 15, // 15% discount
      details: [
        '5 Domains',
        '50 GB SSD Storage',
        '4 GB RAM',
        '4 Cores',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
      ],
      popular: true,
      headerColor: 'bg-success',
    },
    {
      title: 'Pro Plan',
      price: 1499,
      discount: 20, // 20% discount
      details: [
        'Unlimited Domains',
        'Unlimited SSD Storage',
        '8 GB RAM',
        '8 Cores',
        'Unmetered Bandwidth',
        'Priority Support',
        'Free SSL Certificate',
      ],
      popular: true,
      headerColor: 'bg-warning',
    },
    {
      title: 'Enterprise',
      price: 1999,
      discount: 25, // 25% discount
      details: [
        'Unlimited Domains',
        'Unlimited SSD Storage',
        '16 GB RAM',
        '12 Cores',
        'Unmetered Bandwidth',
        'Dedicated IP Address',
        '24/7 Priority Support',
        'Free SSL Certificate',
        'Advanced Security Features',
        'Daily Backups',
      ],
      popular: false,
      headerColor: 'bg-danger',
    },
  ];
  

  const Imagedata = [
    {
      heading: 'Expertise',
      description:
        'Our Cloud Hosting services are designed to provide reliable and efficient IT solutions to grow your business.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description:
        'Get round-the-clock support for any issues with your hosting or website performance.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description:
        'Our team ensures smooth migration and optimal hosting setup for your business.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is Cloud Hosting and how does it work?',
      answer: 'Cloud Hosting uses a network of servers to host your website, ensuring high availability, scalability, and performance.',
    },
    {
      question: 'What are the benefits of Cloud Hosting?',
      answer: 'Cloud Hosting provides scalability, faster load times, better security, and improved reliability compared to traditional hosting.',
    },
    {
      question: 'Is Cloud Hosting secure?',
      answer: 'Yes, Cloud Hosting offers robust security with advanced encryption, regular backups, and firewalls to protect your data.',
    },
    {
      question: 'Can I upgrade my plan as my business grows?',
      answer: 'Absolutely! Our Cloud Hosting plans are designed to be scalable, allowing you to upgrade resources as needed.',
    },
    {
      question: 'How does Cloud Hosting improve website speed?',
      answer: 'With SSD storage and caching technology, Cloud Hosting ensures lightning-fast page load times and superior performance.',
    },
    {
      question: 'What is the difference between shared hosting and Cloud Hosting?',
      answer: 'Shared hosting uses a single server for multiple websites, while Cloud Hosting uses multiple servers for higher performance and scalability.',
    },
    {
      question: 'Can I migrate my existing website to Cloud Hosting?',
      answer: 'Yes, we offer seamless migration services to move your website to our Cloud Hosting platform without downtime.',
    },
    {
      question: 'Do you provide customer support for Cloud Hosting?',
      answer: 'Yes, we provide 24/7 expert support to assist with any issues related to your hosting or website.',
    },
    {
      question: 'Can I host multiple websites on a Cloud Hosting plan?',
      answer: 'Yes, some of our plans allow hosting of multiple domains. Check our plans for details.',
    },
    {
      question: 'How do I get started with Cloud Hosting?',
      answer: 'Simply choose a plan that suits your needs, sign up, and let us take care of the rest!',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero 
        sName="sub-hero" 
        sText="Empower your business with Cloud Hosting"
        subtitle="3X Faster | 5X Scalable  | SSD Storage"
        paragraph="Get up to 10x speed with shared website hosting plans."
      />
      <Pricing plans={plansData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose Cloud Web Hosting?</h2>
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
      <BuildWebsiteCTA title="Get Started with your Hosting Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Cloud Hosting?" />
    </>
  );
}

export default withSEO(Cloud,  
  'Cloud Web Hosting: Buy Reliable Cloud Hosting in Hyderabad | VR2 Technologies',
  'cloud web hosting, buy cloud hosting, cloud hosting in Hyderabad, reliable hosting provider, SSD hosting, affordable cloud hosting plans, scalable hosting, secure hosting services, fast website hosting, managed hosting services, Hyderabad hosting solutions, cloud server hosting, business hosting plans, best cloud hosting provider', 
  'Discover reliable and affordable cloud web hosting in Hyderabad. Get fast, secure, and scalable hosting solutions for your business with SSD storage and managed services. Choose VR2 Technologies for seamless website performance and 24/7 support.'
);
