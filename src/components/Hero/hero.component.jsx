import React from "react";
import Header from "../Header/header.component";
import { container, slash, content } from './hero.module.scss';

import {} from 'gatsby';


const Hero = () => (
    <div>
        <Header />
        <div className={slash}>
            <div className={container}>
                <div className={content}>
                    <h1>Hello!</h1>
                    <h2>Welcome to my web development portfolio.</h2>
                    <button>Get in touch</button>
                </div>
            </div>
            
        </div>
    </div>
)

export default Hero;