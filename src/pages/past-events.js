import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule, ScheduleItem } from "../components/Schedule"

const PastEvents = () => {
  return (
    <Layout>
      <Header />
      <section className="section-past-events">
        <div className="contain">
          <div className="vessel cols">
            <div className="left">
              <h2>Past Events</h2>
            </div>
            <div className="right">
              <Schedule>
                <ScheduleItem id="speaker-kendrick">
                  <h3>
                    Building Web-Based Audio Player for Obscure Audio Format
                  </h3>
                  <h4>Kenrick</h4>
                  <p>
                    BRSTM is an audio file format that are used on Nintendo Wii
                    games and many others. This talk will cover the journey in
                    building this player which decodes the BRSTM file entirely
                    on browser and plays it back using Web Audio API.
                  </p>
                </ScheduleItem>
                <ScheduleItem id="speaker-kendrick">
                  <h3>
                    Building Web-Based Audio Player for Obscure Audio Format
                  </h3>
                  <h4>Kenrick</h4>
                  <p>
                    BRSTM is an audio file format that are used on Nintendo Wii
                    games and many others. This talk will cover the journey in
                    building this player which decodes the BRSTM file entirely
                    on browser and plays it back using Web Audio API.
                  </p>
                </ScheduleItem>
              </Schedule>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PastEvents
