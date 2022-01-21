import React from "react";
import { container, content, link, about, picture } from './about.module.scss';

const About = () => (
    <div className={container}>
        <div className={content}>
            <div className={about}>
                <h1>About me.</h1>
                <p>I’m a web developer located in the Springfield, Missouri area. I focus on building simple, beautiful websites, 
                    and creating the best experience to your users. Here is some of my work. <br></br>
                </p>
                <p><span className={link}>Read More</span></p>
            </div>
            <div className={picture}>
                <img alt="me"></img>
            </div>
        </div>
    </div>
)

export default About;