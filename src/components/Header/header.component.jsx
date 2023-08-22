import React from "react";
import Logo from "../Logo/logo.component";
import Button from "../Button/button";
// import github from '../../images/github-icon.svg'

import * as styles from "./header.module.scss";
// import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const buttonText = "Resume";
  return (
    <div className={styles.header}>
      <Logo />

      <div className={styles.links}>
        <ul>
          <li>
            <a href="#about">
              <span className={styles.accentColor}>01.</span>About
            </a>
          </li>
          <li>
            <a href="#work">
              <span className={styles.accentColor}>02.</span>Work
            </a>
          </li>
          {/* Need to add dark mode toggle here */}
          <li>
            <a href="#contact">
              <span className={styles.accentColor}>04.</span>Contact
            </a>
          </li>
          <Button text={buttonText}></Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
