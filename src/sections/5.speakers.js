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
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
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
                position="Web Developer, Doyobi"
                fixed={data.tanjianzhen.childImageSharp.fixed}
                target="speaker-tan-jian-zhen"
              />{" "}
              {/* Needs check */}
              <SpeakerImage
                name="Mohammad Shahbaz Alam"
                position="Developer Advocate, Magic"
                fixed={data.mohammadshahbazalam.childImageSharp.fixed}
                target="speaker-mohammad-shahbaz-alam"
              />
              <SpeakerImage
                name="Elad Shechter"
                position="CSS/HTML Architect"
                fixed={data.eladshechter.childImageSharp.fixed}
                target="speaker-elad-shechter"
              />
              <SpeakerImage
                name="Henning Schwentner"
                position="Consultant, WPS - Workplace Solutions"
                fixed={data.henningschwentner.childImageSharp.fixed}
                target="speaker-henning-schwentner"
              />{" "}
              {/* Needs check */}
              <SpeakerImage
                name="Mete Atamel"
                position="Developer Advocate, Google"
                fixed={data.meteatamel.childImageSharp.fixed}
                target="speaker-mete-atamel"
              />
              <SpeakerImage
                name="Dmitry Vinnik"
                position="Open Source Developer Advocate, Facebook"
                fixed={data.dmitryvinnik.childImageSharp.fixed}
                target="speaker-dmitry-vinnik"
              />{" "}
              {/* Needs check */}
              <SpeakerImage
                name="Kenzie Woodbridge"
                position="British Columbia Institute of Technology"
                fixed={data.kenziewoodbridge.childImageSharp.fixed}
                target="speaker-kenzie-woodbridge"
              />{" "}
              {/* Needs check */}
              <SpeakerImage
                name="Rob Richardson"
                fixed={data.robrichardson.childImageSharp.fixed}
                target="speaker-rob-richardson"
              />{" "}
              {/* Needs check */}
              <SpeakerImage
                name="Karan Balkar"
                position="Team Lead, LTI"
                fixed={data.karanbalkar.childImageSharp.fixed}
                target="speaker-karan-balkar"
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
