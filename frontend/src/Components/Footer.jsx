import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import foot from '../assets/vr2_footer.png';
import { Link } from 'react-router-dom';

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
              <p className="text-justify">
                As a leading digital marketing company, VR2 Technologies helps your business expand its reach,
                allowing you to showcase your products and services worldwide.
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-3">
              <h2>Quick Links</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                <li className="nav-item mb-3"><Link to="/refund-policy" className="nav-link p-0 text-body-secondary">Refund Policy</Link></li>
                <li className="nav-item mb-3"><Link to="/privacy-policy" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                <li className="nav-item mb-3"><Link to="/terms-conditions" className="nav-link p-0 text-body-secondary">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-3">
              <h2>Useful Links</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><Link to="/service/crm-providers-in-hyderabad" className="nav-link p-0 text-body-secondary">CRM Services</Link></li>
                <li className="nav-item mb-3"><Link to="/service/website-design-and-development-agency-in-hyderabad" className="nav-link p-0 text-body-secondary">Web Design</Link></li>
                <li className="nav-item mb-3"><Link to="/service/google-ads-and-ppc-agency-in-hyderabad" className="nav-link p-0 text-body-secondary">Paid Ads</Link></li>
                <li className="nav-item mb-3"><Link to="/service/seo-services-in-hyderabad" className="nav-link p-0 text-body-secondary">SEO Services</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-3">
              <h2>Follow Us</h2>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a href="https://x.com/VR2Tech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="https://www.instagram.com/vr2tech.in/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="https://www.facebook.com/VR2Tech.in" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="https://www.linkedin.com/company/vr2tech/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>

              <div className="mt-3">
                <a href="https://www.google.com/partners/agency?id=6336786530" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg" alt="Google Partner Badge" style={{ width: '150px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="d-flex justify-content-center py-4 my-4 border-top">
            <p style={{ color: 'white', textAlign: 'center' }}>© {currentYear} VR2 Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
