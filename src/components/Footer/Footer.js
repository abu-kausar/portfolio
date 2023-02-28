import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Md Abu Kausar</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#projects" className="footer__link">Portfolio</a></li>
                    <li><a href="#testimonials" className="footer__link">Testimonials</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://linkedin.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="https://instagram.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Crypticalcoder. All rights reserved 
                </span>
            </div>
        </footer>
    );
};

export default Footer;