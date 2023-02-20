import React, { useState } from 'react';
import './Services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id='services'>
            <h1 className="section__title">Services</h1>
            <span className='section__subtitle'>What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Lorem, <br /> ipsum dolor.</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Lorem, <br /> ipsum dolor.</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Lorem, <br /> ipsum dolor.</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>

                                    <p className="services__modal-info">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;