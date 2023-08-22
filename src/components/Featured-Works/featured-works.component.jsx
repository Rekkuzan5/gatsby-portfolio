import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./featured-works.module.scss";

const FeaturedWorks = () => (
  <div className={styles.container} id="work">
    <div className={styles.slimContainer}>
      <div className={styles.content}>
        <h1>Featured Works.</h1>
        <div className={styles.grid}>
          <div className={styles.grid_item}>
            <div className={styles.pictureFrame}>
            <StaticImage
                className={styles.workPicture}
                src="../../images/dragonflyLogo1.png"
                alt="Dragonfly Bug Tracking Software"
              />
            </div>
            <div className={styles.info}>
              <h3>Dragonfly Bug Tracker</h3>
              <a
                href=""
                target=""
              >
                Source Code
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.pictureFrame}>
              <StaticImage
                className={styles.workPicture}
                src="../../images/embark logo.png"
                alt="Embark Outdoor Clothing"
              />
            </div>
            <div className={styles.info}>
              <h3>Embark Outdoor Clothing</h3>
              <a href="*">Source Code</a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.pictureFrame}></div>
            <div className={styles.info}>
              <h3>C# Consulting Application</h3>
              <a href="*">Source Code</a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.pictureFrame}></div>
            <div className={styles.info}>
              <h3>Project Four</h3>
              <a href="*">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedWorks;
