import React from "react"
import styled from "styled-components"

const SectionAbout = styled.section`
  margin-top: 3.5rem;
`

const AboutText = styled.p`
  font-size: 1.555555556rem;
`

const About = () => (
  <SectionAbout className="section-about" id="about">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            What is <br /> Geekcamp?
          </h2>
        </div>
        <div className="right">
          <AboutText>
			A one-stop event to get acquainted and grow your tech network in Singapore: a hybrid online + in-person GeekcampSG. The end goal: <strong>to reignite vibrant and inspiring meetups in the tech community</strong>.
          </AboutText>
        </div>
      </div>
    </div>
  </SectionAbout>
)

export default About
