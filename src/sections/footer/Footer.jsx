import React from 'react';
import './footer.css';

import logo from "../../assets/logo.svg"


const Footer = () => {
    return (
        <div className="footer container-pd" id="footer">
            <div className="footer__heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="footer__btn">
                <button type="button" className="button">Request Early Access</button>
            </div>
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={logo} alt="logo"/>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="footer__links">
                    <h4>Links</h4>
                    <p>Over us</p>
                    <p>Social media</p>
                    <p>Contact</p>
                    <p>Counters</p>
                </div>
                <div className="footer__links">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="footer__links">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
