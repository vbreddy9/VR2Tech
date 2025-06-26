import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWallet, faChartLine, faArrowUp, faSearchPlus, faShieldAlt, faBullhorn, faNetworkWired, faShareAlt } from '@fortawesome/free-solid-svg-icons';
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
import AutoPopup from '../AutoPopup';
import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function Smm() {
  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,                // Transition animation speed (ms)
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,       // Wait 3 seconds before auto scrolling
  cssEase: "ease-in-out",    // Smooth ease
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  const sliderData = [
    {
      icon: faShieldAlt,
      title: 'Brand Identity Management',
      text: 'Develop an engaging online presence that captivates and expands your audience while enhancing sales and profitability.',
    },
    {
      icon: faChartLine,
      title: 'Competitor Benchmarking',
      text: 'Thorough competitor analysis reveals new opportunities for sustained online advertising growth.',
    },
    {
      icon: faBullhorn,
      title: 'Sponsored Promotions',
      text: 'Implement successful ad strategies, create compelling ad copy, and track results with our experts.',
    },
    {
      icon: faNetworkWired,
      title: 'Social Media Management',
      text: 'Craft targeted content that boosts engagement and aligns with your business goals.',
    },
    {
      icon: faShareAlt,
      title: 'Social Media Marketing',
      text: 'Increase likes, followers, and revenue with tailored strategies that resonate with your audience.',
    },
  ];

  const aboutData = {
    number: '1',
    title: 'What is Social Media Marketing?',
    text: (
      <>
        In today's digital world, social media platforms are essential for communication, shopping, news, and more. If your brand aligns with these activities, Social Media Marketing (SMM) is a crucial part of your digital strategy. <br /><br />
        SMM involves leveraging platforms like Facebook, Instagram, LinkedIn, Pinterest, and YouTube to promote your business through paid and organic methods. It requires more than just posting content; it demands strategic planning and execution.
      </>
    ),
    bulletPoints: [
      'Strategically promote your brand on platforms like Facebook and Instagram.',
      'Combine paid and organic strategies for optimal results.',
      'Boost brand visibility, engagement, and revenue with effective campaigns.',
      'Align social media marketing with business objectives to ensure success.',
    ],
    imageUrl: marketingImage,
    altText: 'Social Media Marketing Image',
  };

  const cardData = [
    {
      icon: faStar,
      title: 'Increased Brand Authority',
      text: 'Enhance brand credibility and authority with cost-effective social media tools.',
    },
    {
      icon: faWallet,
      title: 'Affordable and Budget-Friendly',
      text: 'Leverage social media platforms to promote your services with minimal cost.',
    },
    {
      icon: faChartLine,
      title: 'Achieve High Conversions',
      text: 'Drive consistent conversions with a strong and active social media presence.',
    },
    {
      icon: faArrowUp,
      title: 'Increase Inbound Traffic',
      text: 'Boost inbound marketing efforts and drive traffic with incentives and offers.',
    },
    {
      icon: faSearchPlus,
      title: 'Boost Search Engine Rankings',
      text: 'Improve search engine rankings with optimized social media pages.',
    },
  ];

  const Imagedata = [
    { heading: 'Expertise', description: 'Comprehensive SMM services for measurable business growth.', image: FirstImage },
    { heading: 'Support', description: 'Dedicated support for managing and optimizing your campaigns.', image: SecondImage },
    { heading: 'Implementation', description: 'Seamless SMM strategies to achieve targeted results.', image: ThirdImage },
  ];

  const faqs = [
    {
      question: 'What is Social Media Marketing (SMM)?',
      answer: 'SMM involves promoting your business on platforms like Facebook, Instagram, LinkedIn, and YouTube to drive engagement, revenue, and brand visibility.',
    },
    {
      question: 'How can SMM benefit my business?',
      answer: 'SMM helps improve brand authority, increase traffic, and achieve high conversion rates. It is cost-effective and aligns with inbound marketing strategies.',
    },
    {
      question: 'Which social media platforms are best for SMM?',
      answer: 'Popular platforms include Facebook, Instagram, LinkedIn, Pinterest, and YouTube. The choice depends on your target audience and business goals.',
    },
    {
      question: 'Do I need a large budget for social media ads?',
      answer: 'No, social media platforms offer budget-friendly ad options. Our experts can help you achieve results within your budget.',
    },
    {
      question: 'How do you measure the success of SMM campaigns?',
      answer: 'We use analytics tools to track key metrics like engagement, traffic, and conversions to evaluate campaign success and optimize performance.',
    },
    {
      question: 'How often should I post on social media?',
      answer: 'The frequency depends on your audience and platform. We recommend consistent posting aligned with your marketing strategy.',
    },
    {
      question: 'Can SMM improve SEO rankings?',
      answer: 'Yes, active social media pages can boost your search engine rankings and help your brand appear in top search results.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Elevate Your Brand with Strategic Social Media Marketing" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h3 className="text-center mb-5">How Our Company Helps You?</h3>
        <div className="row justify-content-center gy-5">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4">
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
      <div className="container my-5 p-4 no-vertical-scroll">
          <h3 className="text-center mb-5">What Do You Get From Our SMM Agency?</h3>
          <Slider {...sliderSettings}>
            {sliderData.map((card, index) => (
              <div key={index} className="slide">
                <div className="card text-center">
                  <div className="card-body">
                    <FontAwesomeIcon icon={card.icon} className="fa-4x mb-3" style={{ color: 'brown' }} />
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      <h3 className="text-center mb-5">What We Are</h3>
      <ImageWithDetails data={Imagedata} />
      <h3 className="text-center mb-5">Frequently Asked Questions</h3>
      <div className="faq-container container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
            <h3 className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">{openFaqIndex === index ? '-' : '+'}</span>
            </h3>
            {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      
      <BuildWebsiteCTA title="Get Started with Our SMM Services Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Social Media Marketing?" />
    </>
  );
}

export default withSEO(
  Smm,
  'Top Social Media Marketing Services in Hyderabad | VR2 Technologies',
  'social media marketing, SMM services, best SMM agency Hyderabad, social media management, Facebook marketing, Instagram campaigns, LinkedIn advertising, influencer marketing, social media optimization, VR2 Technologies SMM services',
  'Explore top social media marketing services in Hyderabad with VR2 Technologies. Drive engagement, conversions, and brand visibility through tailored SMM strategies. Contact us today for expert solutions!'
);
