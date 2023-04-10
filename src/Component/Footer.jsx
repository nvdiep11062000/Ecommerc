import React from 'react';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-subcribe">
                        <div className="sign-up">
                            <SlEnvolopeLetter />
                            <p>Sign Up for Newsletter</p>
                        </div>
                        <form className="email">
                            <input type="text" placeholder="Your Email" />
                            <input type="submit" value="Subcribe" />
                        </form>
                    </div>
                    <div className="footer-contact">
                        <div className="contact-us">
                            Contact Us
                            <p>Quynh Tho, Quynh Phu, Thai Binh, Viet Nam, Pincode : 11062000</p>
                            <p>+84 375050478</p>
                            <p>nvdiep11062000@gmail.com</p>
                            <div className="social-link">
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedin />
                                <FaYoutube />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="information">
                            Information
                            <p>Privacy Policy</p>
                            <p>Refund Policy</p>
                            <p>Shipping Policy</p>
                            <p>Term & Conditions</p>
                            <p>Blogs</p>
                        </div>
                        <div className="account">
                            Account
                            <p>About Us</p>
                            <p>Faq</p>
                            <p>Contact</p>
                        </div>
                        <div className="quick-link">
                            Quick Links
                            <p>Laptops</p>
                            <p>Headphones</p>
                            <p>Tablets</p>
                            <p>Watch</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
