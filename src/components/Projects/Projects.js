import React from 'react';
import moneyManager from '../..//Assets/money-manager.png';
import pdfConverter from '../..//Assets/pdfConverter.png';
import doctorPortal from '../..//Assets/doctorPortal.png';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects section" id='projects'>
            <h1 className="section__title">Projects</h1>
            <span className='section__subtitle'>What I have done so far</span>

            <div className="services__container container grid">
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={doctorPortal} alt="" />
                        <h3 className="services__title">Doctor's Portal</h3>
                    </div>

                    <a href='https://doctors-portal-2757b.web.app/' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/doctors-portal-client' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={moneyManager} alt="" />
                        <h3 className="services__title">Money Manager</h3>
                    </div>

                    <a href="https://github.com/abu-kausar/expense-tracker-frontend" className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href="https://github.com/abu-kausar/expense-tracker-frontend" className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={pdfConverter} alt="" />
                        <h3 className="services__title">PDF Converter</h3>
                    </div>

                    <a href='https://pdf-converterr.netlify.app/' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/PDF-Converter' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;