import React from 'react';
import AboutPage from '../Components/AboutPage';
import ChatWidget from '../Components/ChatWidget';
import Clients from '../Components/Clients';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ScrollButton from '../Components/ScrollButton';
import SubHero from '../Components/SubHero';
import Title from '../Components/Title';
import marImage from '../assets/seo.jpeg';
import withSEO from '../HOC/withSEO';


function About() {
  // Define dynamic content for the AboutPage component
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
    altText: 'social media services'
  };

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="About Us" />
      <AboutPage {...aboutData} />
      <Title subTitle='Who we work with' title='Client Showcase'/>
      <Clients/>
      <ScrollButton/>
      <ChatWidget/>
      <Footer/>
    </>
  );
}

export default withSEO(About, 'About Us | VR2 Technologies', 'digital marketing company, ppc marketing, social media experts in hyderabad, smm services in hyderabad, social media services', 'As a leading digital marketing company, VR2 Technologies helps your business expand its reach, allowing you to showcase your products and services worldwide. We ensure that your offerings reach a global audience, creating ample opportunities for growth.');
