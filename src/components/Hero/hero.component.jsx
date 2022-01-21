import React from "react";
import { container, h1, slash } from './hero.module.scss';

import {} from 'gatsby';

const Hero = () => (
    <div className={slash}>
        <div className={container}>
            <h1 className={h1}>Greetings!</h1>
            <h2>Welcome to my web development portfolio.</h2>
            <button>Get in touch</button>
        </div>
        
    </div>
)

export default Hero;