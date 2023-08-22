import React from "react";
//import Header from "../Header/header.component";
import Button from "../Button/button";
import * as styles from "./hero.module.scss";

import {} from "gatsby";

const Hero = () => {
  const buttonText = "Get in touch with me";
  return (
    <section id="home">
      {/* <Header /> */}
      {/* <div className={styles.slash}> */}
        {/* <div className={styles.container}> */}
          <div className={styles.content}>
            <p className={styles.accentText}>Hi, I'm</p>
            <h1 className={styles.nameText}>Cameron<span className={styles.accentText}>,</span></h1>
            <h1 className={styles.nameSubtitle}>A Software Engineer</h1>
            <p>
              focused on building simple, beautiful websites, and creating an exceptional user experience.  I'm currently 
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
