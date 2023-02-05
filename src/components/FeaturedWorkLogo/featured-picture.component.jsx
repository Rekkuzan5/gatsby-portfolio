import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./featured-works.module.scss";

//These can be updated later for smaller components
const FeaturedWorks = () => (
  <div className={styles.grid_item}>
    <div className={styles.pictureFrame}>
      <StaticImage
        className={styles.workPicture}
        src="../../images/embark logo.png"
        alt="Me!"
      />
    </div>
    <div className={styles.info}>
      <h3>Embark Clothing</h3>
      <a href="*">Source Code</a>
    </div>
  </div>
);

export default FeaturedWorks;
