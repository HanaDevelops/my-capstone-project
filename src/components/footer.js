import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js
import footerlogo from "../Assets/Asset 9@4x.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo">
            {/* Replace 'logo.png' with the path to your logo image */}
            <img src={footerlogo} alt="this is a test image" height={45} />
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">Little lemon info</h3>
              <ul className="footer-links">
                <li><Link to="/link1">About us</Link></li>
                <li><Link to="/link2">Franchising</Link></li>
                <li><Link to="/link3">Investor relations</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">My little lemon</h3>
              <ul className="footer-links">
                <li><Link to="/link4">Store locator</Link></li>
                <li><Link to="/link5">Little lemon app</Link></li>
                <li><Link to="/link6">Gift card balance</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">We care</h3>
              <ul className="footer-links">
                <li><Link to="/link7">Nutrition information</Link></li>
                <li><Link to="/link8">Privacy policy</Link></li>
                <li><Link to="/link9">Corporate policies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>);
};

export default Footer;