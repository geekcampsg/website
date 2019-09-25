import React from "react"
import SiteContext from "../components/siteContext"
import { graphql } from "gatsby"

// components
import "../components/main.css"

// sections
import Landing from "../sections/1.landing"
import About from "../sections/2.about"
import Schedule from "../sections/3.schedule"
import Venue from "../sections/4.venue"
import Speakers from "../sections/5.speakers"
import Marquee from "../sections/6.marquee"
import PastSpeakers from "../sections/7.past-speakers"
import Testimonials from "../sections/8.testimonials"
import CoC from "../sections/9.coc"
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <SiteContext.Provider value={data}>
      <SEO title="Home" />
      <Landing />
      <About />
      <Schedule />
      <Venue />
      <Speakers />
      <Marquee />
      <PastSpeakers />
      <Testimonials />
      <CoC />
      <Footer siteTitle={data.site.siteMetadata.title} />
    </SiteContext.Provider>
  )
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default IndexPage
