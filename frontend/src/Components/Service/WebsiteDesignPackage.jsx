import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCogs, faMobileAlt, faUsers, faDesktop, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar';
import SubHero from '../SubHero';
import AutoPopup from '../AutoPopup';
import AboutPage from '../AboutPage';
import marketingImage from '../../assets/Marketing.jpeg';
import BuildWebsiteCTA from '../BuildWebsiteCTA';
import Footer from '../Footer';
import ContactPage from '../ContactPage';
import withSEO from '../../HOC/withSEO';
import ScrollButton from '../ScrollButton';
import ChatWidget from '../ChatWidget';
import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function WebsiteDesignPackage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 5000); 
      return () => clearTimeout(timer);
    }, []);
    const [selectedPlan, setSelectedPlan] = useState('');
    const handleChoosePlan = (planTitle) => {
        setSelectedPlan(planTitle);
        setIsPopupOpen(true);
      };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const sliderData = [
    { icon: faDesktop, title: 'Web Application Development', text: 'Create interactive, responsive, and user-friendly web applications tailored to business needs.' },
    { icon: faMobileAlt, title: 'Mobile Application Development', text: 'Develop robust mobile applications for seamless user experiences across platforms.' },
    { icon: faShoppingCart, title: 'E-Commerce Development', text: 'Build feature-rich e-commerce platforms to enhance online shopping experiences.' },
    { icon: faWordpress, title: 'WordPress Website Development', text: 'Utilize WordPress for scalable, customizable, and SEO-friendly website development.' },
    { icon: faStore, title: 'Shopify Website Development', text: 'Design secure Shopify websites to streamline online retail operations.' },
  ];

  const aboutData = {
    number: '1',
    title: 'Increase Your Online Presence with Expert Website Optimization',
    text: 'VR2Tech specializes in website design and development tailored to meet the needs of modern businesses. Since 2020, we have delivered innovative web solutions to enhance user engagement and drive growth.',
    bulletPoints: [
      'SEO-friendly designs for increased visibility.',
      'Customized solutions to meet unique business needs.',
      'Comprehensive support and maintenance services.',
      'Responsive designs for mobile, tablet, and desktop.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };

  const cardData = [
    { icon: faGlobe, title: 'Search Engine Optimized', text: 'Enhance your website’s ranking with our on-page and off-page SEO strategies.' },
    { icon: faCogs, title: 'Tools Integrated', text: 'Integrate analytics and social media tools for enhanced insights and functionality.' },
    { icon: faMobileAlt, title: 'Mobile Responsive', text: 'Ensure seamless user experiences across all devices with responsive designs.' },
    { icon: faUsers, title: 'Social Media Integration', text: 'Connect your website to social media platforms for improved engagement.' },
  ];

  const Imagedata = [
    { heading: 'Expertise', description: 'Delivering innovative website design solutions.', image: FirstImage },
    { heading: 'Support', description: 'Comprehensive support for your website.', image: SecondImage },
    { heading: 'Implementation', description: 'Expert implementation of web strategies.', image: ThirdImage },
  ];

  const faqs = [
    { question: 'What is website design and development?', answer: 'Website design focuses on aesthetics, while development ensures functionality for user engagement.' },
    { question: 'Why is mobile responsiveness important?', answer: 'Mobile responsiveness ensures optimal user experience on all devices, improving engagement and conversions.' },
    { question: 'What is SEO-friendly design?', answer: 'SEO-friendly design helps improve search engine rankings by adhering to best practices.' },
    { question: 'How long does it take to build a website?', answer: 'The time varies based on complexity, typically ranging from a few weeks to months.' },
    { question: 'Do you offer ongoing maintenance?', answer: 'Yes, we provide support and maintenance to keep your website running smoothly.' },
    { question: 'What industries benefit from e-commerce development?', answer: 'Industries like retail, fashion, and electronics benefit greatly from e-commerce solutions.' },
    { question: 'Can I update my website after launch?', answer: 'Yes, we provide user-friendly CMS options like WordPress for easy updates.' },
    { question: 'How secure are your websites?', answer: 'We implement advanced security measures to protect data and prevent breaches.' },
    { question: 'What makes your services unique?', answer: 'Our focus on tailored solutions, responsive design, and SEO optimization sets us apart.' },
    { question: 'Can you integrate my website with social media platforms?', answer: 'Yes, we ensure seamless integration with social media for enhanced online presence.' },
  ];

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Website Design & Development Company" />
      <AboutPage {...aboutData} />
      
      {/* 👉 Website Design Packages Section */}
        <div className="container my-5">
  <h3 className="text-center fw-bold mb-4">Website Design & Development Packages</h3>
  <div className="row gy-4 justify-content-center">
    {[
      {
        price: '₹349/Per Month',
        title: 'Static Website',
        
        features: [
          'Upto 5 Pages',
          'Mobile Responsive',
          'No Maintenance Cost',
          'No Design Cost',
          'Free Hosting & SSL',
          'Fully Customised Design',
          '24X7 Email/WhatsApp Support'
        ],
        color: 'primary'
      },
      {
        title: 'Dynamic Website',
        price: '₹649/Per Month',
        features: [
          'CMS-based Panel',
          'Unlimited Page Additions',
          'Mobile Responsive',
          'Admin Dashboard',
          'No Maintenance Cost',
          'No Design Cost',
          'Free Hosting & SSL',
          'Fully Customised Design',
          '24X7 Email/WhatsApp Support'
        ],
        color: 'success'
      },
      {
        title: 'eCommerce Website',
        price: '₹1499/Per Month',
        features: [
          'Product Management System',
          'Payment Gateway Integration',
          'Inventory & Orders Dashboard',
          'Mobile Responsive',
          'No Maintenance Cost',
          'No Design Cost',
          'Free Hosting + SSL',
          'Fully Customised Design',
          '24X7 Email/WhatsApp Support'
        ],
        color: 'warning'
      }
    ].map((plan, index) => (
      <div className="col-md-4" key={index}>
        <div className="card h-100 shadow border-0 rounded-2 pricing-card">
          <div className="card-body d-flex flex-column text-center p-4">
            <h3 className="fw-bold mb-3">{plan.title}</h3>
            <h6 className={`text-${plan.color} fw-semibold mb-1`}>Starting {plan.price}</h6>
            
            <ul className="list-unstyled flex-grow-1 text-secondary">
              {plan.features.map((feature, i) => (
                <li key={i} className="py-1">{feature}</li>
              ))}
            </ul>
            <button
              className="btn btn-danger rounded-pill mt-3 px-4 fw-semibold"
              onClick={() => handleChoosePlan(plan.title)}
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
        </div>


        <div className="container my-5">
        <h3 className="text-center mb-5">We Also Include in Our Website Design Package</h3>
        <div className="row gy-5">
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
      <div className="w-3/4 m-auto p-5">
        <h3 className="text-center mb-5">What Do You Get From Our Agency?</h3>
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
      <div className="faq-container container my-5">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item mb-3 ${openFaqIndex === index ? 'open' : ''}`}>
            <h3 className="faq-question" onClick={() => toggleFaq(index)} style={{ cursor: 'pointer' }}>
              <span className="faq-number">{index + 1}. </span>
              {faq.question}
              <span className="faq-icon">{openFaqIndex === index ? '-' : '+'}</span>
            </h3>
            {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <BuildWebsiteCTA title="Start Building Your Website Today!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title={`Interested in ${selectedPlan || 'a Plan'}?`}
          selectedPlan={selectedPlan}
        />


    </>
  );
}

export default withSEO(
  WebsiteDesignPackage,
  'Website Design & Development Company Hyderabad | VR2 Technologies',
  'web development services, responsive website design, SEO-friendly websites, digital marketing integration, e-commerce solutions, professional web development, user experience optimization, Hyderabad website design, VR2 Technologies web solutions',
  'Explore top-notch website design and development services in Hyderabad. Specializing in SEO, mobile responsiveness, and e-commerce solutions tailored to your needs.'
);
