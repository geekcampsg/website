import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      tanjianzhen: file(
        relativePath: { eq: "speakers/featured/tan_jian_zhen.jpg" }
      ) {
        ...profile
      }
      mohammadshahbazalam: file(
        relativePath: { eq: "speakers/featured/mohammad_shahbaz_alam.png" }
      ) {
        ...profile
      }
      eladshechter: file(
        relativePath: { eq: "speakers/featured/elad_shechter.jpg" }
      ) {
        ...profile
      }
      henningschwentner: file(
        relativePath: { eq: "speakers/featured/henning_schwendtner.jpg" }
      ) {
        ...profile
      }
      meteatamel: file(
        relativePath: { eq: "speakers/featured/mete_atamel.jpg" }
      ) {
        ...profile
      }
      dmitryvinnik: file(
        relativePath: { eq: "speakers/featured/dmitry_vinnik.jpg" }
      ) {
        ...profile
      }
      kenziewoodbridge: file(
        relativePath: { eq: "speakers/featured/kenzie_woodbridge.jpg" }
      ) {
        ...profile
      }
      robrichardson: file(
        relativePath: { eq: "speakers/featured/rob_richardson.png" }
      ) {
        ...profile
      }
      karanbalkar: file(
        relativePath: { eq: "speakers/featured/karan_balkar.png" }
      ) {
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
    <section className="section-speakers" id="speakers">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>
              2021
              <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                name="Tan Jian Zhen"
                position="Tech Lead, Syte"
                image={data.tanjianzhen.childImageSharp}
                target="speaker-tan-jian-zhen"
              />
              <SpeakerImage
                name="Mohammad Shahbaz Alam"
                position="Developer Advocate, Magic"
                image={data.mohammadshahbazalam.childImageSharp}
                target="speaker-mohammad-shahbaz-alam"
              />
              <SpeakerImage
                name="Elad Shechter"
                position="CSS/HTML Architect"
                image={data.eladshechter.childImageSharp}
                target="speaker-elad-shechter"
              />
              <SpeakerImage
                name="Henning Schwentner"
                position="Consultant, WPS - Workplace Solutions"
                image={data.henningschwentner.childImageSharp}
                target="speaker-henning-schwentner"
              />
              <SpeakerImage
                name="Mete Atamel"
                position="Developer Advocate, Google"
                image={data.meteatamel.childImageSharp}
                target="speaker-mete-atamel"
              />
              <SpeakerImage
                name="Dmitry Vinnik"
                position="Open Source Developer Advocate, Facebook"
                image={data.dmitryvinnik.childImageSharp}
                target="speaker-dmitry-vinnik"
              />
              {/* Needs check */}
              <SpeakerImage
                name="Kenzie Woodbridge"
                position="British Columbia Institute of Technology"
                image={data.kenziewoodbridge.childImageSharp}
                target="speaker-kenzie-woodbridge"
              />
              {/* Needs check */}
              <SpeakerImage
                name="Rob Richardson"
                image={data.robrichardson.childImageSharp}
                target="speaker-rob-richardson"
              />
              {/* Needs check */}
              <SpeakerImage
                name="Karan Balkar"
                position="Team Lead, LTI"
                image={data.karanbalkar.childImageSharp}
                target="speaker-karan-balkar"
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
