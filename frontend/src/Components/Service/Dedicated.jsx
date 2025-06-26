import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faShieldAlt, faArrowsAltV, faServer, faUserShield, faCogs, faBolt } from '@fortawesome/free-solid-svg-icons';
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

function Dedicated() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // State to track open FAQ

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
      title: 'High-Performance Servers',
      text: 'High-performance dedicated servers: SSD storage, high-memory options, RAID 1 redundancy. Backed by top-tier data centers and Neustar\'s DDoS protection.',
    },
    {
      icon: faUserShield,
      title: 'Maximum Control',
      text: 'Root access for customization. Choose OS, hosting panels, and billing options. Integrated server management panel for administrative control.',
    },
    {
      icon: faTools,
      title: 'Fully Managed',
      text: 'Enjoy hassle-free management with our fully managed service. We handle all server configuration and patching, allowing you to focus solely on managing your website.',
    },
    {
      icon: faShieldAlt,
      title: 'Secure Data Protection',
      text: 'Safeguard your website\'s data with robust security measures, including regular backups and advanced encryption.',
    },
    {
      icon: faCogs,
      title: '24/7 Expert Support',
      text: 'Access our team of hosting experts round-the-clock for assistance with any technical issues or inquiries.',
    },
    {
      icon: faArrowsAltV,
      title: 'Seamless Scalability',
      text: 'Expand your online presence effortlessly with our dedicated servers, featuring seamless scalability to accommodate growing website traffic and resource needs.',
    },
    {
      icon: faBolt,
      title: 'Instant Provisioning',
      text: 'Automated management for quick deployment. Start hosting instantly with no extra costs. We handle hardware replacements.',
    },
  ];

  const plansData = [
    {
      title: 'Business Starter',
      price: 10599,
      discount: 30,
      details: [
        'Intel E3-1220v3 (3.10 GHz Quad Core)',
        '6 GB DDR3 RAM',
        '1000 GB HDD (RAID 1)',
        '1 TB Bandwidth',
        'Free Website Migration',
      ],
      popular: true,
      headerColor: 'bg-primary',
    },
    {
      title: 'Business Standard',
      price: 12599,
      discount: 30,
      details: [
        'Intel E3-1265v3 (2.50 GHz Quad Core w/HT)',
        '14 GB DDR3 RAM',
        '1000 GB HDD (RAID 1)',
        '1 TB Bandwidth',
        'Free Website Migration',
      ],
      headerColor: 'bg-success',
    },
    {
      title: 'Business Plus',
      price: 15599,
      discount: 30,
      details: [
        'Intel E3-1265v3 (2.50 GHz Quad Core w/HT)',
        '22 GB DDR3 RAM',
        '2000 GB HDD (RAID 1)',
        '2 TB Bandwidth',
        'Free Website Migration',
      ],
      headerColor: 'bg-warning',
    },
    {
      title: 'Enterprise',
      price: 'Contact us',
      details: [
        'Intel E3-1271v3 (3.60 GHz Quad Core w/HT)',
        '30 GB DDR3 RAM',
        '2000 GB HDD (RAID 1)',
        '2 TB Bandwidth',
        'Free Website Migration',
      ],
      headerColor: 'bg-danger',
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
      description: 'Our SEO specialists handle all your campaigns, focusing on on-page and off-page SEO to make sure your audience finds you online.',
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
      question: 'What is Dedicated Hosting?',
      answer: 'Dedicated Hosting provides exclusive use of a physical server, offering unparalleled performance, control, and security.',
    },
    {
      question: 'What are the benefits of Dedicated Hosting?',
      answer: 'Dedicated Hosting offers enhanced performance, full control, higher security, and the ability to customize your server.',
    },
    {
      question: 'Is Dedicated Hosting secure?',
      answer: 'Yes, Dedicated Hosting ensures robust security with advanced encryption, regular backups, and strict access controls.',
    },
    {
      question: 'Can I scale resources with Dedicated Hosting?',
      answer: 'Yes, you can easily upgrade server specifications such as RAM, storage, and bandwidth to meet growing demands.',
    },
    {
      question: 'Do you provide managed Dedicated Hosting?',
      answer: 'Yes, our managed Dedicated Hosting includes server setup, maintenance, monitoring, and expert support.',
    },
    {
      question: 'What is the difference between VPS and Dedicated Hosting?',
      answer: 'VPS Hosting shares a physical server, while Dedicated Hosting gives you exclusive access to the entire server for maximum performance.',
    },
    {
      question: 'Can I host multiple websites on Dedicated Hosting?',
      answer: 'Yes, Dedicated Hosting allows hosting multiple websites, applications, and databases on a single server.',
    },
    {
      question: 'Do you offer 24/7 support for Dedicated Hosting?',
      answer: 'Yes, we provide round-the-clock expert support to assist you with server management and technical issues.',
    },
    {
      question: 'How quickly can my Dedicated Hosting be set up?',
      answer: 'Our Dedicated Hosting setup is almost instant, allowing you to start hosting without delays.',
    },
    {
      question: 'Can I migrate my existing website to Dedicated Hosting?',
      answer: 'Yes, we offer free website migration services to seamlessly transfer your data to our Dedicated Hosting platform.',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero
        sName="sub-hero"
        sText="High-Performance Linux Dedicated Servers"
        subtitle="High-Performance Servers | Full Control | Instant Activation"
        paragraph="Get unparalleled performance and control with our Dedicated Hosting plans."
      />
      <Pricing plans={plansData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose Dedicated Hosting?</h2>
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
      <BuildWebsiteCTA title="Get Started with Dedicated Hosting Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Dedicated Hosting?" />
    </>
  );
}

export default withSEO(
  Dedicated,
  'Dedicated Hosting: Buy Linux Dedicated Servers in Hyderabad | VR2 Technologies',
  'dedicated hosting, Linux dedicated servers, buy dedicated hosting Hyderabad, affordable dedicated hosting, managed hosting, secure hosting, scalable dedicated servers, high-performance hosting, SSD dedicated hosting, best dedicated hosting Hyderabad',
  'Get the best Linux Dedicated Hosting plans in Hyderabad with VR2 Technologies. Enjoy high performance, full control, and instant activation. Perfect for growing businesses.'
);
