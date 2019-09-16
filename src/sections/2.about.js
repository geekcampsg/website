import React from "react"
import styled from "styled-components"
import Photos1 from "../images/photos-1.jpg"
import Photos2 from "../images/photos-2.jpg"

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  figure {
    flex: 1;
  }
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const AboutText = styled.p`
  font-size: 1.555555556rem;
`

export default () => (
  <section className="section-about" id="about">
    <Photos>
      <figure>
        <img src={Photos1} alt="" />
      </figure>
      <figure>
        <img src={Photos2} alt="" />
      </figure>
    </Photos>
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
