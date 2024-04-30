import React from 'react';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Development</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">ReactJS, NextJS</div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">JavaScript</div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">HTML, CSS</div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>


                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">Styled Components</div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">Bootstrap</div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <div className="skills_name">Tailwind CSS</div>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Frontend;