import React from "react";
import { footer, links } from './footer.module.scss';

const Footer = () => (
    <div className={footer}>
        <section>
            <p>&copy; Cameron Stapp 2022</p>
            <div className={links}>
                <p><a href='https://github.com/Rekkuzan5' target='_blank' rel='noreferrer'>Github</a></p>
                <p><a href='http://www.linkedin.com/in/cameron-stapp5' target='_blank' rel='noreferrer'>LinkedIn</a></p>
                <p><a href='*'>Resume</a></p>
            </div>
        </section>
    </div>
)

export default Footer;