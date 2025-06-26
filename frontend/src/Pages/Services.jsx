import React from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar';
import ServicePage from '../Components/ServicePage';
import SubHero from '../Components/SubHero.jsx';
import Title from '../Components/Title.jsx';
import Clients from '../Components/Clients.jsx';
import Reviews from '../Components/Testimonial.jsx';
import ScrollButton from '../Components/ScrollButton.jsx';
import ChatWidget from '../Components/ChatWidget.jsx';
import withSEO from '../HOC/withSEO';

function Services() {
  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Our Services" />
      <Title subTitle="So much to offer" title="" />
      <div className="container">
        <ServicePage />
      </div>
      <Title subTitle="Who we work with" title="Client Showcase" />
      <Clients />
      <Title subTitle="Testimonials" title="What Clients Say" />
      <div className="container">
        <Reviews />
      </div>
      <ScrollButton />
      <ChatWidget />
      <Footer />
    </>
  );
}

export default withSEO(
  Services,
  'Digital Marketing Services | VR2 Technologies ',  // Updated unique title
  'best PPC services, cloud hosting, virtual server hosting, social media experts, SEO strategies',
  'Explore our digital marketing services including SEO, PPC, social media management, and cloud solutions in Hyderabad.',
  'https://vr2tech.in/services'
);
