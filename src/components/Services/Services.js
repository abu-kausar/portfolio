import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services section" id='services'>
            <h1 className="section__title">Services</h1>
            <span className='section__subtitle'>What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Lorem, ipsum dolor.</h3>
                    </div>

                    <span className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-servicesgrid">
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
                        <h3 className="services__title">Lorem, ipsum dolor.</h3>
                    </div>

                    <span className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-servicesgrid">
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
                        <h3 className="services__title">Lorem, ipsum dolor.</h3>
                    </div>

                    <span className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            
                            <h3 className="services__modal-title">Lorem, ipsum.</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia recusandae dolore accusamus aut cum asperiores, illo magni totam debitis ipsam saepe! Iusto quis inventore possimus ducimus porro pariatur quos.
                            </p>

                            <ul className="services__modal-servicesgrid">
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