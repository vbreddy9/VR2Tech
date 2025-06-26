import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import foot from '../assets/vr2_footer.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-color">
      <footer className="pt-5 bg-gap">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-12 col-md-3">
              <img src={foot} alt="footer logo" className="footer-logo" />
              <p className="text-justify">As a leading digital marketing company, VR2 Technologies helps your business expand its reach, allowing you to showcase your products and services worldwide.</p>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-3">
              <h2>Quick Links</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><a href="/about" target="_blank" className="nav-link p-0 text-body-secondary">About</a></li>
                <li className="nav-item mb-3"><a href="/refund-policy" target="_blank" className="nav-link p-0 text-body-secondary">Refund Policy</a></li>
                <li className="nav-item mb-3"><a href="/privacy-policy" target="_blank" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                <li className="nav-item mb-3"><a href="/terms-conditions" target="_blank" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-3">
              <h2>Useful Links</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><a href="/service/vps-hosting" target="_blank" className="nav-link p-0 text-body-secondary">VPS Hosting</a></li>
                <li className="nav-item mb-3"><a href="/service/cloud-reseller-hosting" target="_blank" className="nav-link p-0 text-body-secondary">Cloud Hosting</a></li>
                <li className="nav-item mb-3"><a href="/service/linux-shared-hosting" target="_blank" className="nav-link p-0 text-body-secondary">Shared Hosting</a></li>
                <li className="nav-item mb-3"><a href="/service/linux-dedicated-servers" target="_blank" className="nav-link p-0 text-body-secondary">Dedicated Hosting</a></li>
              </ul>
            </div>

            {/* Column 4 - Follow Us & Google Partner Badge */}
            <div className="col-12 col-md-3">
              <h2>Follow Us</h2>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis rounded-circle" href="https://x.com/VR2Tech" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="ms-3"><a className="link-body-emphasis rounded-circle" href="https://www.instagram.com/vr2tech.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="ms-3"><a className="link-body-emphasis rounded-circle" href="https://www.facebook.com/VR2Tech.in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li className="ms-3"><a className="link-body-emphasis rounded-circle" href="https://www.linkedin.com/company/vr2tech/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              </ul>
              
              {/* Google Partner Badge */}
              <div className="mt-3">
                <a href="https://www.google.com/partners/agency?id=6336786530" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg" alt="Google Partner Badge" style={{ width: '150px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Centered Copyright */}
          <div className="d-flex justify-content-center py-4 my-4 border-top">
            <p style={{ color: 'white', textAlign: 'center' }}>© {currentYear} VR2 Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;