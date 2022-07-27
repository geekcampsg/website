import React from "react"

// components
import Layout from "../components/layout"
import { Divider } from "../components/Divider"
import "../components/main.css"

// sections
import Landing from "../sections/1.landing"
import About from "../sections/2.about"
//import Schedule from "../sections/3.schedule"
//import Speakers from "../sections/5.speakers"
//import Marquee from "../sections/6.marquee"
//import PastSpeakers from "../sections/7.past-speakers"
import Testimonials from "../sections/8.testimonials"
//import Sponsors from "../sections/10.sponsors"
import CoC from "../sections/9.coc"

//import Committee from "../sections/13.committee"

import SEO from "../components/seo"
import Partners from "../sections/12.partners"
import LocalTechCommunities from "../sections/14.local-communities"

const IndexPage = () => {
  return (
    <Layout>
      <Divider />
      <SEO title="Home" />
      <Landing />
      <Divider />
      <About />
      <LocalTechCommunities/>
	  {/*<Schedule />*/}
	  {/*<Speakers />*/}
	  {/*<Committee />*/}
	  {/*<Marquee />*/}
	  {/*<PastSpeakers />*/}
	  {/*<Sponsors/>*/}
      <Testimonials />
      <CoC />
      <Partners/>
    </Layout>
  )
}

export default IndexPage
