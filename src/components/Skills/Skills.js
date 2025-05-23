import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills section" id='skills'>
            <h1 className="section__title">Skills</h1>
            <span className='section__subtitle'>My technical level</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    );
};

export default Skills;