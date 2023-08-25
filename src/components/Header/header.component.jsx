import React from "react";
import Logo from "../Logo/logo.component";
//import Button from "../Button/button";
// import github from '../../images/github-icon.svg'

import * as styles from "./header.module.scss";
// import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  //const buttonText = "Resume";
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Cameron_Stapp_Resume.pdf';
            alink.click();
        })
    })
}
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
          <button onClick={onButtonClick}>Resume</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
