import React from "react"
import styled from "styled-components"

const SectionAbout = styled.section`
  margin-top: 3.5rem;
`;

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
            A one day event that brings together hundreds of geeks to share
            about technologies and knowledge. We are celebrating our 11th
            anniversary this year as we continue to connect the community
            through curated talks, <b>by Geeks, for Geeks</b>.
          </AboutText>
        </div>
      </div>
    </div>
  </SectionAbout>
)

export default About;
