import React from "react";
//import Header from "../Header/header.component";
import Button from "../Button/button";
import * as styles from "./hero.module.scss";

import {} from "gatsby";

const Hero = () => {
  const buttonText = "Get in touch with me";
  return (
    <section>
      {/* <Header /> */}
      {/* <div className={styles.slash}> */}
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.accentText}>Hi, my name is</p>
            <h1 className={styles.nameText}>Cameron Stapp</h1>
            <h1 className={styles.nameSubtitle}>This can be a placeholder</h1>
            <p>
              I’m a software engineer located in the Springfield, Missouri area.
              I focus on building simple, beautiful websites, and creating an
              amazing user experience. <br></br>
            </p>
            <div className={styles.button}>
              <Button text={buttonText}></Button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
