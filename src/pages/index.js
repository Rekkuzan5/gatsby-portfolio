import * as React from "react"
import Hero from '../components/Hero/hero.component'
import About from "../components/About/about.component"
import FeaturedWorks from "../components/Featured-Works/featured-works.component"
import Contact from "../components/Contact/contact.component"
import Footer from "../components/Footer/footer.component"

import '../styles/index.module.scss'

const IndexPage = () => {
  return (
    <main>
{/*       <Header />
 */}      <Hero />
      <About />
      <FeaturedWorks />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
