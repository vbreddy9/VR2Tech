import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faKey,
  faBolt,
  faChartBar,
  faDesktop,
  faRetweet,
  faShareAlt,
  faSearch,
  faShoppingBag,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import AutoPopup from '../AutoPopup';
import { faAmazon, faYoutube } from '@fortawesome/free-brands-svg-icons';
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
import Benefits from '../Benefits';

import ImageWithDetails from '../ImageWithDetails';
import FirstImage from '../../assets/expertise.jpeg';
import SecondImage from '../../assets/implementation.jpeg';
import ThirdImage from '../../assets/support.jpeg';

function GoogleMeta() {
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

  const aboutData = {
    number: '1',
    title: 'Unlock Your Online Potential: Leaders in PPC and Meta Ads',
    text:
      'VR2Tech Internet Marketing Agency is a leading expert in both PPC and meta ads, partnering with industry professionals to elevate lead generation and brand visibility. We specialize in optimizing PPC and meta ads strategies for online success and are here to guide you every step of the way.',
    bulletPoints: [
      'Expert Google Ads Management: Maximize ROI and drive targeted traffic.',
      'YouTube PPC Campaigns: Boost brand awareness with engaging video ads.',
      'Data-Driven Approach: Utilizing analytics to refine campaigns.',
      'Customized Campaigns: Tailored to meet unique client objectives.',
      'Transparent Reporting: Detailed reports to track campaign performance.',
    ],
    imageUrl: marketingImage,
    altText: 'Marketing Image',
  };

  const cardData = [
    {
      icon: faSearch,
      title: 'Search Ads',
      text:
        'The primary form of paid search marketing, targeting prospects actively seeking your industry or brand online. Ideal for short sales cycles or one-time promotions.',
    },
    {
      icon: faDesktop,
      title: 'Display Ads',
      text:
        'Reach 90%+ of online users on Google partner sites. Captivating visuals and text prompt action.',
    },
    {
      icon: faShareAlt,
      title: 'Social Ads',
      text:
        'The fastest-growing segment of PPC services, appearing on platforms like Facebook, LinkedIn, and Twitter.',
    },
    {
      icon: faShoppingBag,
      title: 'Shopping Ads',
      text:
        'Featured in a carousel above or beside Google search results, showcasing products and prices directly on SERPs.',
    },
    {
      icon: faRetweet,
      title: 'Remarketing Ads',
      text:
        'Boost conversions by retargeting previous website visitors. Cost-effective and highly targeted.',
    },
    {
      icon: faYoutube,
      title: 'In-stream Ads',
      text:
        'YouTube PPC ads on search results, videos, and Display Network partners. Offers unique brand presentation.',
    },
    {
      icon: faEnvelopeOpenText,
      title: 'Gmail Promotions (GSP)',
      text:
        'Reach leads directly in their inbox. GSP offers click-to-call for instant conversions.',
    },
    {
      icon: faAmazon,
      title: 'Amazon PPC Ads',
      text:
        'Gain brand visibility, drive sales, and increase store visits with sponsored ads on Amazon.',
    },
  ];

  const benefitsData = [
    {
      icon: faPlayCircle,
      title: 'Start with Ease',
      description: 'Boost your ads with our step-by-step guide. Partner with our PPC experts today.',
    },
    {
      icon: faKey,
      title: 'Unlock PPC Potential',
      description: 'Invest in PPC management for targeted brand visibility and increased conversions.',
    },
    {
      icon: faBolt,
      title: 'Fast Results',
      description: 'Instant results with PPC ads! Launch, see overnight impact, optimize for success.',
    },
    {
      icon: faChartBar,
      title: 'Measurable Insights',
      description: 'PPC provides clear tracking via Google Analytics for campaign insights.',
    },
  ];

  const faqs = [
    {
      question: 'What is PPC advertising?',
      answer: 'PPC (Pay-Per-Click) advertising is a digital marketing strategy where advertisers pay a fee each time their ad is clicked.',
    },
    {
      question: 'Why should I use PPC for my business?',
      answer: 'PPC drives instant traffic, targets specific audiences, and delivers measurable results, making it a cost-effective strategy.',
    },
    {
      question: 'What platforms support PPC advertising?',
      answer: 'Popular platforms include Google Ads, Facebook Ads, Amazon PPC, LinkedIn Ads, and YouTube Ads.',
    },
    {
      question: 'How much does PPC advertising cost?',
      answer: 'The cost depends on factors like the platform, competition, and campaign objectives. Our experts tailor budgets for maximum ROI.',
    },
    {
      question: 'What are remarketing ads?',
      answer: 'Remarketing ads target users who have previously visited your site, encouraging them to return and complete a desired action.',
    },
    {
      question: 'How long does it take to see results from PPC?',
      answer: 'Results can be seen almost immediately after launching a campaign, but optimization improves performance over time.',
    },
    {
      question: 'What industries benefit from PPC advertising?',
      answer: 'PPC suits industries like eCommerce, healthcare, real estate, education, and more, offering versatile options for all business types.',
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

  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Google(PPC), Youtube & Meta Ads Marketing" />
      <AboutPage {...aboutData} />
      <div className="container my-5">
        <h2 className="text-center mb-5">Diverse PPC ad types for your goals.</h2>
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
      <hr />
      <h2 className="text-center my-5">The Power of PPC Marketing for Your Business</h2>
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
      <BuildWebsiteCTA title="Get Started with Google & Meta Paid Ads!" />
      <ContactPage />
      <ScrollButton />
      <ChatWidget />
      <Footer />
      <AutoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Need help with Paid Ads?" />
    </>
  );
}

export default withSEO(
  GoogleMeta,
  'Google, YouTube(PPC), Meta & Amazon Ads Marketing in Hyderabad | VR2 Technologies',
  'PPC marketing services, Google Ads management, YouTube Ads experts, Meta Ads strategies, Amazon PPC specialists, digital marketing Hyderabad, VR2 Technologies, targeted ad campaigns, ROI-focused PPC, scalable PPC solutions, PPC advertising Hyderabad, ecommerce PPC services',
  'Unlock your business potential with expert PPC and Meta Ads strategies. Boost traffic, conversions, and ROI with Google Ads, YouTube Ads, and Amazon PPC solutions.'
);
