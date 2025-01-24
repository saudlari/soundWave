import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg"
import "./Footer.css";

function Footer() {
  return (
    
      <footer className="footer-container">
        <ul className="footer-list-int">
          <li>
            <a href="https://example.com">About Us</a>
          </li>
          <li>
            <a href="https://example.com">Contact</a>
          </li>
        </ul>
        <ul className="footer-list-ext">
          <li>
            <img className="icon-image" src={twitterIcon} />
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <img className="icon-image" src={facebookIcon} />
            <a href="https://www.facebook.com">Facebook</a>
          </li>
        </ul>
      </footer>
    
  );
}

export default Footer;
