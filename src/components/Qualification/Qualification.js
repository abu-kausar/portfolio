import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                            }
                            onClick = {() => toggleTab(1)}
                            >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div 
                        className={
                            toggleState === 2 ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                            }
                            onClick = {() => toggleTab(2)}
                            >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={toggleState === 1 ? 
                            "qualification__content qualification__content-active" 
                            : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BS in CSE</h3>
                                <span className="qualification__subtitle">North South University</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">Shahid Syed Nazrul Islam College</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2012 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SSC</h3>
                                <span className="qualification__subtitle">Imambari High School</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2010 - 2012
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain Institute</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div 
                        className={toggleState === 2 ? 
                            "qualification__content qualification__content-active" 
                            : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Vemate</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">BEM Group Agency</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2023 - Present
                                </div>
                            </div>
                        </div>

                        {/*<div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain Institute</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain Institute</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;