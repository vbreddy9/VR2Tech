import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faCogs,
  faLock,
  faThumbsUp,
  faShareAlt,
  faHandHoldingUsd,
  faHdd,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';
import SubHero from '../SubHero';
import AboutPage from '../AboutPage';
import marketingImage from '../../assets/Marketing.jpeg';
import BuildWebsiteCTA from '../BuildWebsiteCTA';
import Footer from '../Footer';
import ContactPage from '../ContactPage';
import withSEO from '../../HOC/withSEO';
import Benefits from '../Benefits';
import ChatWidget from '../ChatWidget';
import ScrollButton from '../ScrollButton';
import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function HostingService() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const aboutData = {
    number: '1',
    title: 'Empower Growth: Hosting & Marketing Solutions.',
    text: 'VR2Tech, a premier hosting company in Hyderabad, has been fueling business growth since 2020. As a small agency with grand visions, we excel in providing a suite of digital marketing services tailored to our clients needs.',
    bulletPoints: [
      'Expert help available instantly via live chat and email support.',
      'No more waiting - we are dedicated to resolving issues within minutes.',
      'Quick and efficient support to address your needs promptly.',
      'Resolve queries swiftly with our rapid-response support team.',
      'Multilingual assistance ensures clear communication and understanding.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };

  const cardData = [
    {
      icon: faShareAlt,
      title: 'Shared Hosting  →',
      text: 'Everything you require to establish your online presence, conveniently and cost-effectively.',
      url: '/service/linux-shared-hosting',
    },
    {
      icon: faHandHoldingUsd,
      title: 'Cloud Hosting  →',
      text: 'Empower your entrepreneurial spirit by reselling top-notch hosting plans to your clients.',
      url: '/service/cloud-reseller-hosting',
    },
    {
      icon: faHdd,
      title: 'VPS Hosting  →',
      text: 'Unlock unparalleled control and flexibility for your business with Virtual Private Servers (VPS).',
      url: '/service/vps-hosting',
    },
    {
      icon: faServer,
      title: 'Dedicated Servers  →',
      text: 'Experience top-tier performance that propels your business towards unmatched success.',
      url: '/service/linux-dedicated-servers',
    },
  ];

  const benefitsData = [
    {
      icon: faGlobe,
      title: 'Global Reach',
      description: 'Expand your reach worldwide with our hosting solutions.',
    },
    {
      icon: faCogs,
      title: 'Easy Management',
      description: 'Effortlessly manage your hosting environment with intuitive controls.',
    },
    {
      icon: faLock,
      title: 'Enhanced Security',
      description: 'Ensure the safety of your data with robust security measures.',
    },
    {
      icon: faThumbsUp,
      title: 'Reliable Performance',
      description: 'Experience consistent and reliable performance for your website.',
    },
  ];

  const faqs = [
    {
      question: 'What is web hosting, and why do I need it?',
      answer: 'Web hosting is a service that allows individuals and businesses to make their websites accessible on the internet. It is essential for storing website data and ensuring it is available online.',
    },
    {
      question: 'What are the types of hosting services?',
      answer: 'The main types of hosting services include shared hosting, VPS hosting, dedicated servers, and cloud hosting. Each caters to different needs and levels of resources.',
    },
    {
      question: 'How do I choose the right hosting plan?',
      answer: 'Consider your website’s size, traffic, and resource requirements. Shared hosting is suitable for small sites, while VPS or dedicated servers are better for high-traffic websites.',
    },
    {
      question: 'Is my data secure with your hosting services?',
      answer: 'Yes, we prioritize data security with robust encryption, regular backups, and advanced firewalls to protect your website’s data.',
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 support via live chat, email, and ticketing to assist with any hosting-related issues.',
    },
    {
      question: 'Can I upgrade my hosting plan later?',
      answer: 'Absolutely! Our hosting plans are scalable, allowing you to upgrade as your website’s needs grow.',
    },
    {
      question: 'What is the difference between shared hosting and VPS hosting?',
      answer: 'Shared hosting involves multiple websites sharing server resources, while VPS hosting provides a dedicated virtual environment for better performance and control.',
    },
  ];

  const handleCardClick = (url) => {
    window.location.href = url; // ✅ Opens the link in the same tab
  };
  

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

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Web Hosting Perfected: Rapid and Protected" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Choose your perfect Package</h2>
        <div className="row gy-5">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-3">
              <div
                className="card text-center"
                onClick={() => handleCardClick(card.url)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={card.icon}
                    className="fa-4x mb-3"
                    style={{ color: 'brown' }}
                  />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <h2 className="text-center my-5">The Power of Hosting Services</h2>
      <Benefits benefitsData={benefitsData} />
      <h3 className="text-center mb-5">What we are.</h3>
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
      <BuildWebsiteCTA title="Finding it hard to choose a plan?" />
      <ContactPage />
      <ChatWidget />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default withSEO(
  HostingService,
  'Buy the Best Hosting Services Hyderabad | VR2 Technologies',
  'web hosting services, shared hosting, VPS hosting, dedicated hosting, cloud hosting, website hosting in Hyderabad, top hosting company in Hyderabad, hosting provider in Hyderabad, affordable hosting plans, secure hosting services, reliable hosting, managed hosting solutions, SEO-optimized hosting, best hosting plans, scalable hosting solutions, hosting support in Hyderabad, fast hosting services, business hosting solutions',
  'Discover the best web hosting services in Hyderabad. Explore shared, VPS, cloud, and dedicated hosting options tailored for your business. Secure, reliable, and scalable hosting solutions from VR2 Technologies.'
);
