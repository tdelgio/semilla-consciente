import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Mision from "../components/mision"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Mision />
  </Layout>
)

export default IndexPage
