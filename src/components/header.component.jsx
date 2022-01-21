import React from "react";
import Logo from "./Logo/logo.component"

import { header, links } from '../styles/header.module.scss';

const Header = () => {
    return (
        <div className={header}>
            <Logo />
            <div className={links}>
                <p><a href='https://github.com/Rekkuzan5' target='_blank' rel='noreferrer'>Github</a></p>
                <a href='http://www.linkedin.com/in/cameron-stapp5' target='_blank' rel='noreferrer'>LinkedIn</a>
            </div>

        </div>
    )
}

export default Header;