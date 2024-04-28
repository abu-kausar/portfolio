import React from 'react';
import Image from '../..//Assets/about.jpg';
import Info from './Info';
import CVFile from '../..//Assets/md_abu_kausar.pdf';
import './About.css'
import IconComponent from '../IconComponent';

const About = () => {
    return (
        <section className="about section" id='about'>
            <h1 className="section__title">About Me</h1>
            <span className='section__subtitle'>My introduction</span>

            <div className="about__container container grid">
                <img src={Image} alt="" className="about__img" />
                <div className="about__data">
                    <Info />

                    <p className="about__description">I have completed my graduation in Computer Science and Engineering(CSE) at North South University (NSU). I'm currently working as a Software Engineer (Remote) at BEM Group Agency, Dubai Silicone Oasis, Dubai, UAE. In BEM Group, I am currently working on copyright free sound effects platform where user can listen, download and purchase sound effects uploaded by some studio owner. I love cooking, travelling, playing cricket in leisure time.</p>

                    <a download="" href={CVFile} className="button button--flex">
                        Download CV
                        <IconComponent.DownloadIcon/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;