import * as React from "react";
import Hero from "../components/Hero/hero.component";
import About from "../components/About/about.component";
import FeaturedWorks from "../components/Featured-Works/featured-works.component";
import Contact from "../components/Contact/contact.component";
import Footer from "../components/Footer/footer.component";
import Header from "../components/Header/header.component";

import * as styles from "../styles/index.module.scss";

const IndexPage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.vertical}>
        <a>stapp.cameron@gmail.com</a>
        <div className={styles.line}>

        </div>
      </div>
      <main className={styles.styledMain}>
        <Hero />
        <About />
        <FeaturedWorks />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default IndexPage;
