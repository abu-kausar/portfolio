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

                    <p className="about__description">I'm a passionate Software Engineer specializing in front-end development with a focus on React.js and Next.js. I graduated with a degree in Computer Science and Engineering from North South University (NSU), and I'm currently working remotely for BEM Group Agency, located in Dubai Silicon Oasis, Dubai, UAE. <br /> <br />

                        At BEM Group, I'm part of an exciting project developing a platform for copyright-free sound effects. This platform allows users to listen, download, and purchase sound effects uploaded by various studio owners, providing a rich and user-friendly experience. <br /> <br />

                        In my free time, I enjoy cooking, traveling to new places, and playing cricket. My diverse interests help me maintain a balanced life and bring creativity and energy to my professional work. <br /> <br />

                        Feel free to explore my portfolio to see some of my projects and learn more about my professional journey. Let's connect and create something amazing together!</p>

                    <a download="" href={CVFile} className="button button--flex">
                        Download CV
                        <IconComponent.DownloadIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;