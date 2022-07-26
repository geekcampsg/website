import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      vivian: file(
        relativePath: { eq: "speakers/past/dr_vivian_balakrishnan.jpg" }
      ) {
        ...profile
      }
      michelle: file(relativePath: { eq: "speakers/past/michelle_lye.jpg" }) {
        ...profile
      }
      omer: file(relativePath: { eq: "speakers/past/omer_iqbal.jpg" }) {
        ...profile
      }
      sebastiaan: file(
        relativePath: { eq: "speakers/past/sebastiaan_deckers.jpg" }
      ) {
        ...profile
      }
      bunnie: file(relativePath: { eq: "speakers/past/bunnie_huang.jpg" }) {
        ...profile
      }
      melvin: file(relativePath: { eq: "speakers/past/melvin_zhang.jpg" }) {
        ...profile
      }
    }
    fragment profile on File {
      childImageSharp {
	    gatsbyImageData(height: 400, placeholder: BLURRED)
      }
    }
  `)
  return (
    <section className="section-past-speakers" id="past-speakers">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>
              Our Past <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                portrait
                name="Dr Vivian Balakrishnan"
                position="Minister"
                image={data.vivian.childImageSharp}
                past
              />
              <SpeakerImage
                portrait
                name="Sebastiaan Deckers"
                position="Staff Software Engineer, Zendesk"
                objectPosition="0% 0%"
                image={data.sebastiaan.childImageSharp}
                past
              />
              <SpeakerImage
                portrait
                name="Michelle Lye"
                position="Product Manager, AIS Cube"
                image={data.michelle.childImageSharp}
                past
              />
              <SpeakerImage
                portrait
                name="Omer Iqbal"
                position="iOS Dev, SEA"
                image={data.omer.childImageSharp}
                past
              />
              <SpeakerImage
                portrait
                name="Bunnie Huang"
                position="Hacker, Bunnie Studios"
                image={data.bunnie.childImageSharp}
                past
              />
              <SpeakerImage
                portrait
                position="VP of Software, The Intelligent Warehouse"
                name="Melvin Zhang"
                image={data.melvin.childImageSharp}
                past
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
