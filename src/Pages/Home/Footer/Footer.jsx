import React from 'react'
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <footer className="footer">
        <div className="footer-call">
            <div className="container">
                <div className="footer-call-content">
                    <div className="row">
                        <div className="row-text">
                            <div className="footer-call-text">
                                <span>Contact with us</span>
                                <h2>Contact us now to get quote</h2>
                            </div>
                        </div>
                        <div className="row-content-num">
                            <div className="footer-call-info">
                                <div className="footer-icon">
                                    <img src="src/assets/support.png.webp" alt="" />
                                </div>
                                <div className="footer-call-num">
                                    <span>Call us now</span>
                                    <h2>00000000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="row-list">
                        <div className="footer-about">
                        <div className="footer-title">
                            <h4>Contact Us</h4>
                        </div>
                        <ul>
                            <li>Address: 60 East 65th Street, New York City</li>
                            <li>
                            Email: 
                            Hvac.support@gmail.com
                            </li>
                            <li>Numberphone: 1-688-688-94</li>
                        </ul>
                        <div className="footer-about-social">
                            <span>Follow us on:</span>
                            <a href=""><i><FaFacebookF /></i></a>
                            <a href=""><i><FaTwitter/></i></a>
                            <a href=""><i><FaInstagram/></i></a>
                            
                        </div>
                        </div>
                    </div>

                    <div className="row-list">
                            <div className="footer-title">
                                <h4>Quick links</h4>
                            </div>
                        <div className="footer-widget">
                            <ul>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Our services</li>
                                <li>Latest projects</li>
                            </ul>
                            <ul>
                                <li>Service & Repair</li>
                                <li>AC Maintation</li>
                                <li>Routine Care</li>
                                <li>Cooling Systems</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row-list">
                            <div className="footer-title">
                                <h4>What's News</h4>
                            </div>
                        <div className="footer-widget">
                        </div>

                        <div className="footer-widget-recent">
                            <div href="" className="footer-widget-recent-item">
                                <div className="footer-widget-recent-pic">
                                    <img src="src/assets/news-1.jpg.webp" alt="" />
                                </div>
                                <div className="footer-widget-recent-text">
                                    <h5>168 HVAC Business Slogan Ideas</h5>
                                    <span>Jun 23, 2020</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-widget-recent">
                            <div href="" className="footer-widget-recent-item">
                                <div className="footer-widget-recent-pic">
                                    <img src="src/assets/news-2.jpg.webp" alt="" />
                                </div>
                                <div className="footer-widget-recent-text">
                                    <h5>168 HVAC Business Slogan Ideas</h5>
                                    <span>Jun 23, 2020</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row-list">
                            <div className="footer-title">
                                <h4>subscribe</h4>
                            </div>
                        <div className="footer-widget">
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Email"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div className="footer-copyright">
                        <div className="row">
                            <div className="col">
                                <p>
                                Copyright ©
                                2025 All rights reserved | This template is made with 
                                by Dev
                                </p>
                            </div>
                        </div>
                    </div>
      </footer>
    </div>
  )
}

export default Footer
