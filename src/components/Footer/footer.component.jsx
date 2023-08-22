import React from "react";
import * as styles from './footer.module.scss';

const Footer = () => (
    <div className={styles.footer} id="contact">
        <div className={styles.footerContainer}>
            <p>&copy; Cameron Stapp 2023</p>
            <div className={styles.links}>
                <p><a href='https://github.com/Rekkuzan5' target='_blank' rel='noreferrer'>Github</a></p>
                <p><a href='http://www.linkedin.com/in/cameron-stapp5' target='_blank' rel='noreferrer'>LinkedIn</a></p>
                <p><a href='*'>Resume</a></p>
            </div>
        </div>
    </div>
)

export default Footer;