import React from 'react';
import invoice from '../../Assets/invoiceus.png';
import pureSound from '../..//Assets/puresound.png';
import moneyManager from '../..//Assets/money-manager.png';
import doctorPortal from '../..//Assets/doctorPortal.png';
import motoHub from '../..//Assets/motoHub.png';
import autoFin from '../../Assets/autoFin.png';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects section" id='projects'>
            <h1 className="section__title">Projects</h1>
            <span className='section__subtitle'>A glimpse of some projects</span>

            <div className="services__container container grid">
                {/* puresounds project */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={pureSound} alt="" />
                        <h3 className="services__title">Pure Sounds</h3>
                    </div>

                    <a href="https://www.puresounds.cloud/" target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href="https://github.com/BEM-Group/pure-sounds-frontend" target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                {/* invoice us project */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={invoice} alt="" />
                        <h3 className="services__title">Invoice us</h3>
                    </div>

                    <a href="https://dev.invoiceus.com/" target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href="https://github.com/BEM-Group/invoiceus-client" target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                {/* motohub */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={motoHub} alt="" />
                        <h3 className="services__title">MotoHub</h3>
                    </div>

                    <a href='https://motohub-rosy.vercel.app/' target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/motohub' target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                {/* autofin */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={autoFin} alt="" />
                        <h3 className="services__title">Autofin</h3>
                    </div>

                    <a href='https://autofin-three.vercel.app/' target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/autofin' target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                {/* doctor's appointment */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={doctorPortal} alt="" />
                        <h3 className="services__title">Doctor's Portal</h3>
                    </div>

                    <a href='https://doctors-portal-2757b.web.app/' target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/doctors-portal-client' target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>

                {/* money manager */}
                <div className="projects__content">
                    <div>
                        <img className='projectImage' src={moneyManager} alt="" />
                        <h3 className="services__title">Money Manager</h3>
                    </div>

                    <a href='https://github.com/abu-kausar/expense-tracker-frontend' target='blank' className="services__button">Watch Live
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>

                    <br />

                    <a href='https://github.com/abu-kausar/expense-tracker-frontend' target='blank' className="services__button">Source Code
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;