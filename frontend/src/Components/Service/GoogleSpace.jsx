import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGoogleDrive, faGooglePlay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
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
import Pricing from '../Pricing';
import AutoPopup from '../AutoPopup';

import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function GoogleSpace() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const aboutData = {
    number: '1',
    title: 'Looking for the best Google Workspace provider in Hyderabad?',
    text: 'VR2Tech offers comprehensive Google Workspace services, including setup, support, migration, and training. Partner with us for reliable and affordable Google Workspace solutions tailored to your business needs.',
    bulletPoints: [
      'Trusted partner for startups and established businesses alike.',
      'Committed to delivering innovative and impactful solutions.',
      'Dedicated to creating engaging and user-centric web experiences.',
      'Tailors solutions to meet unique client needs and objectives.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };

  const cardData = [
    {
      icon: faUsers,
      title: 'Effortless Teamwork',
      text:
        'Collaborate globally in real-time. Create and edit documents, spreadsheets, and presentations simultaneously for seamless teamwork.',
    },
    {
      icon: faGlobe,
      title: 'Effortless Connection',
      text:
        'Google Meet offers high-definition video meetings for up to 500 participants globally. Share screens, chat, and stay aligned for efficient communication.',
    },
    {
      icon: faMobileAlt,
      title: 'Robust Security',
      text:
        "Trust Google's robust security features, including two-factor authentication, data loss protection, and encrypted connections in Google Workspace.",
    },
    {
      icon: faGoogle,
      title: 'Tailored Workspace',
      text: 'Adapt Google Workspace to your needs. Personalize your interface, integrate extensions, and link third-party apps.',
    },
    {
      icon: faGoogleDrive,
      title: 'File Storage & Sharing',
      text:
        'Store and share files securely with Google Drive. Access files from any device and collaborate in real time with colleagues.',
    },
    {
      icon: faGooglePlay,
      title: 'App Integration',
      text:
        'Integrate Google Workspace with your favorite apps from Google Play. Streamline workflows and increase productivity.',
    },
    {
      icon: faGooglePay,
      title: 'Convenient Payments',
      text:
        'Use Google Pay for easy and secure payments. Simplify transactions and manage finances seamlessly.',
    },
  ];

  const plansData = [
    {
      title: 'Business Starter',
      price: 160,
      details: [
        'Custom and secure business email',
        '100-participant video meetings',
        '30 GB pooled storage per user',
        'Security and management controls',
        'Standard support',
      ],
      popular: true,
      headerColor: 'bg-primary',
      discount: 10,
    },
    {
      title: 'Business Standard',
      price: 210,
      details: [
        'Custom and secure business email',
        '150-participant video meetings + recording',
        '2 TB pooled storage per user',
        'Security and management controls',
        'Enhanced support (optional upgrade)',
      ],
      headerColor: 'bg-success',
      discount: 20,
    },
    {
      title: 'Business Plus',
      price: 280,
      details: [
        'Custom and secure business email + eDiscovery, retention',
        '500 participant video meetings + recording, attendance tracking',
        '5 TB pooled storage per user',
        'Enhanced security and management controls, including Vault',
        'Enhanced support (optional upgrade)',
      ],
      headerColor: 'bg-warning',
      discount: 15,
    },
    {
      title: 'Enterprise',
      price: 'Contact us',
      details: [
        'Custom and secure business email + eDiscovery, retention, encryption',
        '1000 participant video meetings + recording, live streaming',
        '5 TB pooled storage per user, expandable upon request',
        'Advanced security, compliance controls, and Premium Support',
      ],
      headerColor: 'bg-danger',
    },
  ];

  const faqs = [
    {
      question: 'What is Google Workspace?',
      answer:
        'Google Workspace is a suite of productivity tools like Gmail, Docs, Drive, and Meet designed for business collaboration and efficiency.',
    },
    {
      question: 'Can Google Workspace improve team collaboration?',
      answer:
        'Yes, Google Workspace enables real-time collaboration on documents, spreadsheets, and presentations with global accessibility.',
    },
    {
      question: 'Is my data secure with Google Workspace?',
      answer:
        'Absolutely. Google Workspace offers advanced security features, including two-factor authentication and encrypted connections.',
    },
    {
      question: 'What storage options are available?',
      answer:
        'Google Workspace plans offer pooled storage ranging from 30 GB to 5 TB per user, with options to expand.',
    },
    {
      question: 'Can I integrate Google Workspace with other apps?',
      answer:
        'Yes, Google Workspace supports seamless integration with third-party applications for enhanced functionality.',
    },
    {
      question: 'Do you provide migration support for Google Workspace?',
      answer:
        'Yes, we offer comprehensive migration services to transition your data and systems to Google Workspace smoothly.',
    },
    {
      question: 'What support options are available?',
      answer:
        'Our plans include standard support, with optional upgrades to enhanced or premium support for advanced needs.',
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
      description: 'Our experts provide round-the-clock support for Google Workspace services.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'We ensure seamless Google Workspace implementation tailored to your business needs.',
      image: ThirdImage,
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Our Comprehensive Google Workspace Services" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Google Workspace Enterprise: Endless Business Benefits</h2>
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
      <Pricing plans={plansData} />
      <h3 className="text-center mb-5">What We Are</h3>
      <ImageWithDetails data={Imagedata} />
      <div className="faq-container my-5">
        <h1 className="text-center">Frequently Asked Questions</h1>
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
      <BuildWebsiteCTA title="Get Started with Google Workspace Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Google Workspace?" />
    </>
  );
}

export default withSEO(
  GoogleSpace,
  'Google Workspace Provider in Hyderabad | VR2 Technologies',
  'Google Workspace services Hyderabad, Google Workspace migration, Google Workspace setup, Google Workspace support, best Google Workspace provider Hyderabad, Google Workspace solutions, secure Google Workspace, affordable Google Workspace plans',
  'Discover top-tier Google Workspace services in Hyderabad. VR2 Technologies offers seamless setup, migration, and support to enhance your business collaboration and productivity.'
);
