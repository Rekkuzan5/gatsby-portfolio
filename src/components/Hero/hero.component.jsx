import React from "react";
//import Header from "../Header/header.component";
import Button from "../Button/button";
import * as styles from "./hero.module.scss";
//import '../../styles/index.module.scss';

import {} from "gatsby";

const Hero = () => {
  const buttonText = "Get in touch with me!";
  return (
    <section id="home">
      {/* <Header /> */}
      {/* <div className={styles.slash}> */}
        {/* <div className={styles.container}> */}
          <div className={styles.content}>
            <h1 className={styles.accentText}>Hi, my name is</h1>
            <h2 className={styles.nameText}>Cameron.</h2>
            <h3 className={styles.nameSubtitle}>I craft web experiences.</h3>
            <p>
              I'm a software engineer that creates tailored digital solutions and an exceptional digital experience.  I'm currently 
              building accessible, customer oriented solutions at <a href="https://www.invosolutions.com/"><span className={styles.accentText}>Invo Solutions.</span></a>
            </p>
            <div className={styles.button}>
             <a href="#contact"><Button text={buttonText}></Button></a>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
