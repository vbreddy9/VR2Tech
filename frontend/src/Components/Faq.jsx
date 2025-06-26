import React, { useState } from 'react';
import Navbar from './Navbar';
import SubHero from './SubHero';
import withSEO from '../HOC/withSEO';
import './Faq.css';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import ScrollButton from './ScrollButton';

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: 'What digital marketing services does VR2 Technologies offer in Hyderabad?',
      answer: 'VR2 Technologies provides comprehensive services, including SEO, PPC, social media marketing, content creation, email marketing, and web design, helping businesses achieve measurable online growth.',
    },
    {
      question: 'How does SEO help businesses in Hyderabad?',
      answer: 'SEO improves your website’s visibility on search engines through optimized keywords, engaging content, and technical enhancements, driving organic traffic and establishing brand authority.',
    },
    {
      question: 'What are the key benefits of PPC advertising?',
      answer: 'PPC delivers immediate visibility, targeted traffic, and higher ROI by leveraging platforms like Google Ads and Meta. It allows real-time tracking and ad performance optimization.',
    },
    {
      question: 'Why is social media marketing essential for businesses?',
      answer: 'Social media marketing helps businesses connect with their target audience, build brand loyalty, and drive conversions through engaging campaigns on platforms like Facebook, Instagram, and LinkedIn.',
    },
    {
      question: 'What makes VR2 Technologies unique in providing CRM solutions?',
      answer: 'VR2 Technologies offers CRM solutions that enhance lead management, streamline customer interactions, and integrate with advanced tools to improve customer satisfaction and business efficiency.',
    },
    {
      question: 'How does email marketing contribute to business growth?',
      answer: 'Email marketing allows businesses to engage with their audience through personalized campaigns, promoting products, sharing updates, and nurturing leads to drive conversions.',
    },
    {
      question: 'What is Cloud Telephony, and how does it benefit businesses?',
      answer: 'Cloud telephony simplifies business communication by managing calls over the internet without traditional hardware, ensuring scalability, flexibility, and seamless integration with CRM tools.',
    },
    {
      question: 'How do engaging video ads impact marketing strategies?',
      answer: 'Video ads grab attention with storytelling and visuals, increasing engagement, brand recall, and conversions, especially when optimized for platforms like YouTube and social media.',
    },
    {
      question: 'What industries benefit most from local SEO services?',
      answer: 'Industries like retail, hospitality, healthcare, real estate, and professional services benefit from local SEO, which focuses on enhancing visibility for location-based searches.',
    },
    {
      question: 'How do bulk SMS services help businesses in Hyderabad?',
      answer: 'Bulk SMS marketing delivers instant communication to a large audience, promoting offers, updates, and reminders effectively, ensuring higher engagement rates and ROI.',
    },
    {
      question: 'What makes VR2 Technologies a trusted digital marketing agency in Hyderabad?',
      answer: 'With a proven track record, data-driven strategies, and a customer-centric approach, VR2 Technologies ensures comprehensive solutions tailored to business goals for sustainable growth.',
    },
    {
      question: 'How does website design influence user experience?',
      answer: 'A well-designed website enhances user engagement with mobile responsiveness, fast loading speed, intuitive navigation, and visually appealing layouts, leading to higher conversions.',
    },
    {
      question: 'What are the benefits of integrating CRM with cloud telephony?',
      answer: 'Integrating CRM with cloud telephony improves lead tracking, automates call management, and ensures personalized customer interactions, boosting sales and operational efficiency.',
    },
    {
      question: 'How can businesses leverage data analytics in digital marketing?',
      answer: 'Data analytics provides insights into customer behavior, campaign performance, and market trends, enabling businesses to make informed decisions and optimize their marketing efforts.',
    },
    {
      question: 'What role does content marketing play in SEO?',
      answer: 'Content marketing enhances SEO by creating high-quality, keyword-rich content that attracts organic traffic, improves user engagement, and establishes authority in the niche.',
    },
    {
      question: 'Why is mobile responsiveness critical for websites?',
      answer: 'Mobile responsiveness ensures that websites perform seamlessly across devices, improving user experience, reducing bounce rates, and boosting search engine rankings.',
    },
    {
      question: 'How do e-commerce solutions help businesses grow?',
      answer: 'E-commerce solutions streamline online shopping with features like secure transactions, intuitive navigation, and personalized user experiences, driving sales and customer satisfaction.',
    },
    {
      question: 'What is the importance of branding in digital marketing?',
      answer: 'Branding builds trust, differentiates your business from competitors, and fosters emotional connections with customers, creating loyalty and driving long-term success.',
    },
    {
      question: 'What are the key strategies for improving conversion rates?',
      answer: 'Optimizing landing pages, simplifying checkout processes, using compelling CTAs, and personalizing user experiences are key strategies to improve conversion rates.',
    },
    {
      question: 'How does VR2 Technologies support startups in digital marketing?',
      answer: 'VR2 Technologies provides cost-effective digital marketing solutions tailored for startups, including SEO, PPC, and social media strategies to establish a strong online presence and drive growth.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <SubHero sName="sub-hero" sText="Frequently Asked Questions" />
      <div className="faq-container">
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
      <ScrollButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default withSEO(
  Faq,
  'Frequently Asked Questions | VR2 Technologies',
  'digital marketing services FAQ, SEO FAQ, CRM solutions FAQ, social media marketing FAQ, website design FAQ, Hyderabad digital marketing agency FAQ',
  'Discover answers to the most frequently asked questions about digital marketing, SEO, CRM solutions, website design, and social media marketing. Learn how VR2 Technologies helps businesses achieve their goals in Hyderabad and beyond.'
);
