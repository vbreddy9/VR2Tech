import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Faq from './Components/Faq.jsx';
import ThankYou from './Components/ThankYou.jsx';

// Services
import CRM from './Components/Service/CrmService.jsx';
import Website from './Components/Service/WebsiteDesignPackage.jsx';
import TelePhony from './Components/Service/TelePhony.jsx';
import GoogleSpace from './Components/Service/GoogleSpace.jsx';
import GoogleMeta from './Components/Service/GoogleMeta.jsx';
import Seo from './Components/Service/Seo.jsx';
import Smm from './Components/Service/Smm.jsx';

// Policies
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import TermsConditions from './Components/TermsConditions.jsx';
import RefundPolicy from './Components/RefundPolicy.jsx';

// Persistent Component
import GoogleReviewCard from './Components/GoogleReviewCard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/frequently-asked-questions" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />

      {/* Service Routes */}
      <Route path="/service/crm-providers-in-hyderabad" element={<CRM />} />
      <Route path="/service/website-design-and-development-agency-in-hyderabad" element={<Website />} />
      <Route path="/service/ivr-cloud-telephony-services-in-hyderabad" element={<TelePhony />} />
      
      
      <Route path="/service/seo-services-in-hyderabad" element={<Seo />} />
      <Route path="/service/google-work-space-providers-in-hyderabad" element={<GoogleSpace />} />
      <Route path="/service/google-ads-and-ppc-agency-in-hyderabad" element={<GoogleMeta />} />
      <Route path="/service/social-media-marketing" element={<Smm />} />

      {/* Policy Routes */}
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>

    {/* Persistent Google Review Card */}
    <GoogleReviewCard />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
