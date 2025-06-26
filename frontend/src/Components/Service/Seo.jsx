import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartLine, faLink, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
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

function Seo() {
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
    title: 'What is SEO/Search Engine Optimization?',
    text: (
      <>
        Nowadays, every business, big or small, wants to have a strong online presence. SEO, which stands for Search Engine Optimization, is crucial for achieving this. SEO helps improve your website so that it attracts more visitors from search engines like Google. <br /><br />
        In simple terms, SEO involves making changes to your website’s design and content to make it more appealing to search engines. This is one of the best online marketing strategies to help your business grow online. By using SEO, you can attract more visitors to your site, get more qualified leads, and increase your sales and profits.
      </>
    ),
    bulletPoints: [
      'Proven strategies for startups and enterprises to boost visibility.',
      'Dedicated to delivering innovative SEO solutions with measurable ROI.',
      'Enhanced user experiences through effective on-page and off-page SEO.',
      'Customized SEO campaigns tailored to business objectives.',
    ],
    imageUrl: marketingImage,
    altText: 'SEO Services Image',
  };

  const cardData = [
    {
      icon: faGlobe,
      title: 'Top SEO Agency in Hyderabad',
      text: 'VR2 Technologies excels in creating SEO-friendly content that engages audiences. Our professional team ensures your website ranks high and attracts quality leads.',
    },
    {
      icon: faChartLine,
      title: 'Conversion Rate Enhancement',
      text: 'We implement Conversion Rate Optimization (CRO) strategies, increasing leads and improving ROI with insights-driven solutions.',
    },
    {
      icon: faLink,
      title: 'High-Quality Link Building',
      text: 'Our team focuses on strategic link-building campaigns to improve domain authority and drive consistent traffic to your website.',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Local SEO Expertise',
      text: 'Optimize your business for local search results with our proven local SEO techniques, driving targeted traffic to your physical locations.',
    },
    {
      icon: faSearch,
      title: 'Competitive Keyword Research',
      text: 'We identify and target high-traffic, low-competition keywords, ensuring your business ranks for the most relevant search terms.',
    },
  ];

  const Imagedata = [
    {
      heading: 'Expertise',
      description: 'Our experienced team delivers tailored SEO solutions to help businesses achieve sustained growth.',
      image: FirstImage,
    },
    {
      heading: 'Support',
      description: 'We provide continuous support and optimization for all your SEO campaigns, ensuring consistent performance.',
      image: SecondImage,
    },
    {
      heading: 'Implementation',
      description: 'Seamless SEO strategy implementation and monitoring for measurable success.',
      image: ThirdImage,
    },
  ];

  const faqs = [
    {
      question: 'What is SEO, and how does it work?',
      answer: 'SEO stands for Search Engine Optimization. It involves optimizing your website to improve its visibility on search engines like Google.',
    },
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. Typically, results become noticeable within 3 to 6 months, depending on the industry and competition.',
    },
    {
      question: 'What is on-page and off-page SEO?',
      answer: 'On-page SEO focuses on optimizing website content and HTML. Off-page SEO involves external factors like link building and social signals.',
    },
    {
      question: 'What are keywords, and why are they important?',
      answer: 'Keywords are the terms users search for online. Targeting the right keywords ensures your site reaches the relevant audience.',
    },
    {
      question: 'Can local businesses benefit from SEO?',
      answer: 'Absolutely! Local SEO strategies help businesses rank higher in local searches, attracting more local customers.',
    },
    {
      question: 'Do I need technical expertise for SEO?',
      answer: 'Not necessarily. Our experts handle the technical aspects while educating you on how to maintain and improve SEO efforts.',
    },
  ];

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Experience Progressive Growth & Business Success" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h3 className="text-center mb-5">What do you get from our SEO Agency?</h3>
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
      <h3 className="text-center mb-5">What we are.</h3>
      <ImageWithDetails data={Imagedata} />
      <div className="faq-container">
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
      
      <BuildWebsiteCTA title="Get Started with Our SEO Services Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with SEO?" />
    </>
  );
}

export default withSEO(
  Seo,
  'Best SEO Services in Hyderabad | VR2 Technologies',
  'Best SEO Services Hyderabad, Professional SEO Hyderabad, Organic SEO Hyderabad, Top SEO Agency Hyderabad, Affordable SEO Hyderabad, Expert SEO Hyderabad, Local SEO Hyderabad, SEO Specialists Hyderabad, Website Optimization Hyderabad, Technical SEO Services Hyderabad',
  'Discover the best SEO services in Hyderabad by VR2 Technologies. Improve your website’s rankings, boost organic traffic, and achieve sustained business growth with expert SEO strategies. Contact us today!'
);
