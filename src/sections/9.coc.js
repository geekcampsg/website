import React from "react"
import styled from "styled-components"

import Console from "../components/console"

const Row = styled.div`
  display: flex;

  .pre {
    flex: 1;
  }

  .ascii {
    display: flex;
  }
  .ascii-holder {
    overflow: hidden;
    padding-left: 0;
    margin-top: 0;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    code {
      font-family: monospace;
      font-weight: bold;
      font-size: 6px;
      line-height: 6px;
    }
    @media screen and (min-width: 768px) {
      code {
        font-size: 7px;
        line-height: 7px;
      }
    }
    @media screen and (min-width: 960px) {
      code {
        font-size: 10px;
        line-height: 10px;
      }
    }
  }
`

export default () => (
  <section className="section-coc" id="coc">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            Code
            <br /> of
            <br /> Conduct
          </h2>
        </div>
        <div className="right">
          <section class="coc">
            <p>
              All attendees, speakers, sponsors and volunteers at our conference
              are required to agree with the following code of conduct.
              Organizers will enforce this code throughout the event. We are
              expecting cooperation from all participants to help ensuring a
              safe environment for everybody.
            </p>
            <p>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </p>
            <p>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualized images, activities,
              or other material. Booth staff (including volunteers) should not
              use sexualized clothing/uniforms/costumes, or otherwise create a
              sexualized environment.
            </p>
            <p>
              If a participant engages in harassing behavior, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </p>
            <p>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Conference staff can be identified
              as they'll be wearing branded t-shirts.
            </p>
            <p>
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </p>
            <p>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </p>
            <h3>Need help?</h3>
            <p>
              You have our contact details in the emails we've sent. Please feel
              free to approach (a few designated people we appointed to handle,
              emails here) to report any incidents. Rest assured it will be kept
              confidental.
            </p>
          </section>
        </div>
      </div>
    </div>
  </section>
)
