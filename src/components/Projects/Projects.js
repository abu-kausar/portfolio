import React from 'react';
import carDoctor from '../..//Assets/carDoctor.png';
import defaultImage from '../..//Assets/defaultProjectImage.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects section" id='projects'>
            <h1 className="section__title">Projects</h1>
            <span className='section__subtitle'>What I have done so far</span>

            <div className="services__container container grid">
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={carDoctor} alt="" />
                        <h3 className="services__title">Car Doctor</h3>
                    </div>

                    <a href="https://car-doctor-b3036.web.app/" className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href="https://github.com/abu-kausar/car-doctor-client" className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={defaultImage} alt="" />
                        <h3 className="services__title">Amazon Simple</h3>
                    </div>

                    <a href='https://github.com/abu-kausar/amazon-simple-app' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/amazon-simple-app' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={defaultImage} alt="" />
                        <h3 className="services__title">PDF Converter</h3>
                    </div>

                    <a href='https://github.com/abu-kausar/PDF-Converter' className="services__button">Watch Live
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