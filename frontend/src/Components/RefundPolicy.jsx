import React from 'react';
import './RefundPolicy.css'; // Include your CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';
import SubHero from './SubHero';
import withSEO from '../HOC/withSEO';

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <SubHero sName="sub-hero" sText="Refund Policy" />
      <div className="refund-policy">
        <p>
        This Refund Policy ("Policy") outlines the terms and conditions under which VR2tech ("we," "us," or "our") handles refunds for the services we provide, including but not limited to website development, Google Workspace, Google Ads, YouTube Ads, Meta Ads, CRM services, hosting services, and cloud telephony services (collectively, the "Services"). By using our Services, you agree to the terms of this Policy.
        </p>
        <h2>1. No Refunds</h2>
        <p>We do not offer refunds for any amounts paid for our Services. Once a payment has been made, it is considered final and non-refundable.</p>
        
        <h2>2. Extension of Services</h2>
        <p>
        Instead of providing refunds, we offer the option to extend the duration or scope of the Services you have purchased. If you are not satisfied with the Services or have any concerns, please contact us, and we will work with you to ensure your needs are met by extending the services accordingly.
        </p>
        <h2>3. Requesting Service Extensions</h2>
        <p>
        To request an extension of Services, please contact our customer support team at [info@vr2tech.in] with your order details and the reason for your request. We will review your request and provide a response within a reasonable timeframe.
        </p>
        <h2>4. Eligibility for Service Extensions</h2>
        <p>
        Service extensions are granted at our sole discretion and may be subject to certain conditions, such as the nature of the service, the reason for the request, and the original terms of purchase.
        </p>
        <h2>5. Changes to this Policy</h2>
        <p>
        We reserve the right to update or change this Policy at any time. We will notify you of any changes by posting the new Policy on this page. Your continued use of our Services after any modifications to this Policy will constitute your acknowledgment of the changes and your consent to abide and be bound by the updated Policy.

        </p>
        <h2>6. Contact Information</h2>
        <p>
          If you have any questions or concerns about this Refund Policy, please contact us at: info@vr2tech.in.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default withSEO(RefundPolicy, 'Refund Policy | VR2 Technologies');
