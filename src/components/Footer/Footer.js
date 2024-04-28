import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Md Abu Kausar</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#projects" className="footer__link">Projects</a></li>
                    <li><a href="#qualification" className="footer__link">Qualification</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/abukausar75/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/abu-kausar" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="https://www.instagram.com/imkausar__/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; 2023-2024 | Md Abu Kausar | All rights reserved 
                </span>
            </div>
        </footer>
    );
};

export default Footer;