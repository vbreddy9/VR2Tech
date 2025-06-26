import './ServicePage.css'
import React from 'react';
import { Link } from 'react-router-dom';
import crm from '../assets/Uniquely-Designed-For-Growing-Businesses.jpg';
import tele from '../assets/cloud-telephony.png';
import ppc from '../assets/Google-Youtube-Ads-PPC.jpeg';
import website from '../assets/website-design-auditing.jpeg';

import seo from '../assets/seo-services.jpg';
import smm from '../assets/social-media.jpeg';



function ServicePage() {
  
  return(
    <div className='container main-services'>
      
      <div className="service no-text-decoration">
      <Link to="/service/ivr-cloud-telephony-services-in-hyderabad">
        <img src={tele} alt='cloud telephony provider in hyderabad' />
        <h2>Cloud Telephony(All in one Calls + WhatsApp)</h2>
        <p>Unlock the potential of advanced cloud telephony in India. Enjoy call tracking, reports, recording, CRM/WhatsApp integration, and IVR solutions</p>
        <button className='btn2' >Request Service</button>
        </Link>
      </div>
      <div className="service no-text-decoration">
      <Link to="/service/google-ads-and-ppc-agency-in-hyderabad" >
        <img src={ppc} alt='ppc ads' />
        <h2>Google(PPC), Youtube & Meta Ads</h2>
        <p>Reach your target audience effectively and drive instant traffic to your website with our PPC advertising solutions.</p>
       <button className='btn3'>Request Service</button></Link>
      </div>
      <div className="service no-text-decoration">
      <Link to="/service/website-design-and-development-agency-in-hyderabad" >
        <img src={website} alt='website design and development' />
        <h2>Website Design & Development</h2>
        <p>We recognize the pivotal role that websites play in every business's success, growth and improvements etc.</p>
       <button className='btn1'>Request Service</button></Link>
      </div> 
     <div className="service no-text-decoration">
      <Link to="/service/crm-providers-in-hyderabad" >
        <img src={crm} alt='crm provider in hyderabad'/>
        <h2>CRM- Services</h2>
        <p>Centralizes customer interactions, streamlines processes, and drives growth. Scalable, customizable, and data-driven. Maximizes revenue and customer value.</p> 
        <button className='btn2' >Request Service</button>
        </Link>
        
      </div>
      <div className="service no-text-decoration">
      <Link to="/service/seo-services-in-hyderabad" >
        <img src={seo} alt='seo strategist in hyderabad'/>
        <h2>Search Engine Optimization</h2>
        <p>SEO stands for Search Engine Optimization, which is the process of optimizing your website to urge organic traffic from the program results page.</p>
        <button className='btn2' >Request Service</button>
        </Link>
      </div>
      <div className="service no-text-decoration">
      <Link to="/service/social-media-marketing">
        <img src={smm} alt='social media marketing'/>
        <h2>Social Media Marketing</h2>
        <p>Social media marketing uses platforms to promote your brand, engage with your audience, and drive traffic through content and ads.</p>
        <button className='btn2' >Request Service</button>
        </Link>
      </div>
     
    </div>

  )
}
export default ServicePage;