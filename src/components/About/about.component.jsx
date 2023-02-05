import React from "react";
import { StaticImage } from "gatsby-plugin-image";
//import { myImage } from "./myImage";
import * as styles from "./about.module.scss";

const About = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.about}>
        <h1>About me.</h1>
        <p>
          I’m a developer located in the Springfield, Missouri area. I focus on
          building simple, beautiful websites, and creating an amazing user
          experience. <br></br>
        </p>
        <p>
          <span className={styles.link}>Read More</span>
        </p>
      </div>
      <div className={styles.picture}>
        <StaticImage
          className={styles.aboutImage}
          src="../../images/me.png"
          alt="Me!"
        />
      </div>
    </div>
  </div>
);

export default About;
