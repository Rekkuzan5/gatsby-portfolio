import React from "react";
import { StaticImage } from "gatsby-plugin-image";
//import { myImage } from "./myImage";
import * as styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.about}>
          <h1>About me.</h1>
          <p>
            Hello! My name is Cameron and I enjoy getting creative and building
            things. My main focus at the moment is building innovative and
            user-friendly products at
            <a href="invosolutions.com">
              <span className={styles.companyTitle}>Invo Solutions</span>
            </a>{" "}
            for a variety of clients.
          </p>
          <p>Here are a few technologies I've been using recently:</p>
          <div>
            <ul className={styles.skills}>
              <li>Javascript</li>
              <li>Vue</li>
              <li>Laravel</li>
              <li>React</li>
              <li>.NET/C#</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <div className={styles.picture}>
          <div className={styles.imageBorder}></div>
          <StaticImage
            className={styles.aboutImage}
            src="../../images/me.png"
            alt="Me!"
          />
          {/* <div id={styles.cover}></div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
