import React from "react"
import styled from "styled-components"

const SectionCallForPapers = styled.section`
  margin-top: 3.5rem;
`

const CallForPapersText = styled.p`
  font-size: 1.555555556rem;
`

const CallForPapers = () => (
  <SectionCallForPapers className="section-cfp" id="about">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            Give a <br /> Talk?
          </h2>
        </div>
        <div className="right">
          <CallForPapersText>
            We are calling for volunteers and talk proposals to craft / build / hack an experience that every participant will never forget.
            It could be targeted at the general audience (headline track) or a technical deep-dive you're excited to share about (parallel track).
          </CallForPapersText>
          <CallForPapersText>
            Send us your ideas and proposals here: <a href="https://www.papercall.io/geekcamppsg2022">https://www.papercall.io/geekcamppsg2022</a>
          </CallForPapersText>
        </div>
      </div>
    </div>
  </SectionCallForPapers>
)

export default CallForPapers
