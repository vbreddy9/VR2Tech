import React from 'react';
import AboutPage from '../Components/AboutPage.jsx';
import ChatWidget from '../Components/ChatWidget.jsx';
import Clients from '../Components/Clients.jsx';
import ContactPage from '../Components/ContactPage.jsx';
import Footer from '../Components/Footer.jsx';
import Hero from '../Components/Hero.jsx';
import Navbar from '../Components/Navbar.jsx';
import ScrollButton from '../Components/ScrollButton.jsx';
import ServicePage from '../Components/ServicePage.jsx';
import Title from '../Components/Title.jsx';
import marImage from '../assets/Marketing.jpeg';
import withSEO from '../HOC/withSEO';
import LoadingLogo from '../Components/LoadingLogo.jsx';
import Testimonial from '../Components/Testimonial.jsx';

function Home() {
  const aboutData = {
    number: '1',
    title: 'Why Choose VR2 Technologies?',
    text:
      'As a leading digital marketing company, VR2 Technologies helps your business expand its reach, allowing you to showcase your products and services worldwide. We ensure that your offerings reach a global audience, creating ample opportunities for growth.',
    bulletPoints: [
      'Elevate your conversion rates.',
      'Cut costs.',
      'Achieve a substantial return on investment (ROI).',
      'Maintain a competitive edge.',
      'Connect with a global audience.'
    ],
    imageUrl: marImage,
    altText: 'digital marketing hyderabad'
  };

  return (
    <>
      <LoadingLogo>
        <Navbar />
        <Hero />
        <AboutPage {...aboutData} />
        <Title subTitle="So much to offer" title="Our Automated Services" />
        <ServicePage />
        <Title subTitle="Who we work with" title="Client Showcase" />
        <Clients />
        <Title subTitle="Testimonials" title="Satisfied Customers" />
        <div className="container">
          <Testimonial />
        </div>
        <Title subTitle="Contact Us" title="Get in Touch" />
        <div className="container">
          <ContactPage />
        </div>
        <ScrollButton />
        <ChatWidget />
        <Footer />
      </LoadingLogo>
    </>
  );
}

export default withSEO(
  Home,
  'VR2 Technologies - Digital Marketing Experts in Hyderabad',  // Updated unique title
  'digital marketing company, SEO services, PPC, cloud hosting, Hyderabad digital marketing',
  'VR2 Technologies is the best digital marketing company in Hyderabad, offering expert SEO, PPC, and social media services for business growth.',
  'https://vr2tech.in/'  // Ensuring the correct canonical URL
);
