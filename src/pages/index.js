import React from "react"

// components
import Layout from "../components/layout"
import "../components/main.css"

// sections
import Landing from "../sections/1.landing"
import About from "../sections/2.about"
import Schedule from "../sections/3.schedule"
import Speakers from "../sections/5.speakers"
import Marquee from "../sections/6.marquee"
import PastSpeakers from "../sections/7.past-speakers"
import Testimonials from "../sections/8.testimonials"
import Sponsors from "../sections/10.sponsors"
import CoC from "../sections/9.coc"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <About />
      {/* <Speakers />
      <Schedule /> */}
      <Marquee />
      {/* <PastSpeakers /> */}
      <Testimonials />
      {/* <Sponsors/> */}
      <CoC />
    </Layout>
  )
}

export default IndexPage
