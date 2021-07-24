import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Mision from "../components/mision"
import Fundaments from "../components/fundaments"
import Location from "../components/location"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <Hero />
    <About />
    <Fundaments />
    <Location />
    <Contact />
  </Layout >
)

export default IndexPage
