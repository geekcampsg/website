import React from "react"
import styled from "styled-components"
import Photos from "../images/photos.jpg"

const Images = styled.div`
  height: 538px;
  background: #ccc;
  width: 100%;
  background: url(${Photos}) center;
  margin-bottom: 2rem;
`

const AboutText = styled.p`
  font-size: 1.777777778rem;
`

export default () => (
  <section className="section-about" id="about">
    <Images />
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
  </section>
)
