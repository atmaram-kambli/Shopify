import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png'
import insta_icon from '../Assets/logo.png'
import pintester_icon from '../Assets/logo.png'
import whatapp_icon from '../Assets/logo.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="logo" />
            <p>SHOPIFY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social">
            <div className="footer-icon">
                <img src={insta_icon} alt="instagram" />
            </div>
            <div className="footer-icon">
                <img src={pintester_icon} alt="instagram" />
            </div>
            <div className="footer-icon">
                <img src={whatapp_icon} alt="instagram" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer