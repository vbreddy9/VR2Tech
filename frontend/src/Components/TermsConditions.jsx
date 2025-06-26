import React from 'react';
import './TermsConditions.css'; // Include your CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';
import SubHero from './SubHero';
import withSEO from '../HOC/withSEO';

const TermsConditions = () => {
  return (
    <>
    <Navbar/>
    <SubHero sName="sub-hero" sText="Terms & Conditions"/>
    <div className="terms-conditions">
    <p>
        These Terms & Conditions ("Terms") govern your use of the services provided by VR2tech ("we," "us," or "our") including but not limited to website development, Google Workspace, Google Ads, YouTube Ads, Meta Ads, CRM services, hosting services, and cloud telephony services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access or use our Services.
      </p>
      <h2>2. User Data</h2>
      <p>
        In order to provide our Services, we may collect and process personal information from you. By using our Services, you consent to the collection, storage, and use of your personal information as outlined in our Privacy Policy.
      </p>
      <h2>3. Intellectual Property</h2>
      <p>
        All content, materials, and intellectual property provided as part of our Services, including but not limited to website content, logos, trademarks, and software, are the property of VR2tech and are protected by copyright, trademark, and other intellectual property laws.
      </p>
      <h2>4. Use of Services</h2>
      <p>
        You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not use our Services in any manner that could damage, disable, overburden, or impair our servers or interfere with any other party's use and enjoyment of our Services.
      </p>
      <h2>5. Payment and Billing</h2>
      <p>
        Payment for our Services is required in accordance with the terms outlined in our pricing plans or as agreed upon in a separate contract. Failure to pay for our Services may result in the suspension or termination of your access to the Services.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        In no event shall VR2tech or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, arising out of or in connection with the use or inability to use our Services.
      </p>
      <h2>7. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless VR2tech and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or in connection with your use of our Services or your violation of these Terms.
      </p>
      <h2>8. Modification of Terms</h2>
      <p>
        We reserve the right to modify or update these Terms at any time without prior notice. By continuing to use our Services after any such changes, you agree to be bound by the revised Terms.
      </p>
      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Hyderabad, without regard to its conflict of law principles.
      </p>
      <h2>10. Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact us at: info@vr2tech.in.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default withSEO(TermsConditions, 'Terms and Conditions | VR2 Technologies');
