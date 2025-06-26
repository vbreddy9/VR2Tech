import React from 'react';
import './PrivacyPolicy.css'; // Include your CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';
import SubHero from './SubHero';
import withSEO from '../HOC/withSEO';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Privacy Policy" />
      <div className="privacy-policy">
        <p>
          This Privacy Policy ("Policy") describes how VR2tech ("we," "us," or "our") collects, uses, and shares personal information collected from users ("you" or "your") of our website and services, including but not limited to website development, Google Workspace, Google Ads, YouTube Ads, Meta Ads, CRM services, hosting services, and cloud telephony services (collectively, the "Services"). By using our Services, you consent to the collection, storage, and use of your personal information as described in this Policy.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information from you when you interact with our Services, including but not limited to:
          <ul>
            <li>Information you provide when you register for an account, subscribe to our newsletter, or fill out a form;</li>
            <li>Information about your usage of our Services, including your IP address, browser type, and device information;</li>
            <li>Information collected through cookies and similar tracking technologies;</li>
            <li>Information from third-party sources, such as social media platforms or business partners.</li>
          </ul>
        </p>
        <h2>2. Use of Information</h2>
        <p>
          We may use the personal information we collect for various purposes, including but not limited to:
          <ul>
            <li>Providing and maintaining our Services;</li>
            <li>Personalizing your experience and improving our Services;</li>
            <li>Communicating with you, including responding to inquiries and providing customer support;</li>
            <li>Marketing and promoting our products and services;</li>
            <li>Analyzing trends and user behavior to improve our Services;</li>
            <li>Complying with legal obligations.</li>
          </ul>
        </p>
        <h2>3. Sharing of Information</h2>
        <p>
          We may share your personal information with third parties for various purposes, including but not limited to:
          <ul>
            <li>Service providers who assist us in operating our Services;</li>
            <li>Business partners for marketing and promotional purposes;</li>
            <li>Legal authorities or government agencies as required by law;</li>
            <li>With your consent or as otherwise disclosed at the time of collection.</li>
          </ul>
        </p>
        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2>5. Your Rights</h2>
        <p>
          You may have certain rights regarding your personal information, including the right to access, correct, or delete your information. You may also have the right to opt-out of certain data processing activities. Please contact us at [info@vr2tech.in] if you would like to exercise any of these rights.
        </p>
        <h2>6. Changes to this Policy</h2>
        <p>
          We reserve the right to update or change this Policy at any time. We will notify you of any changes by posting the new Policy on this page. Your continued use of our Services after any modifications to this Policy will constitute your acknowledgment of the changes and your consent to abide and be bound by the updated Policy.
        </p>
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at: info@vr2tech.in.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default withSEO(PrivacyPolicy, 'Privacy Policy | VR2 Technologies');
