import React from "react"
import {
  ScheduleTime,
  ScheduleItem,
  ScheduleTitle,
} from "../components/Schedule"

export default () => (
  <section className="section-schedule" id="schedule">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>schedule</h2>
        </div>
        <div className="right">
          <ScheduleTitle>Day 1 : 19 September</ScheduleTitle>
          <ScheduleTime>
            <ScheduleItem>
              <h3>Ushering</h3>
              <time dateTime="2020-09-19T13:45:00">1345 - 1355</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2020-09-19T13:55:00">1355 - 1400</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-chong-jia-yi">
              <h3>
                Bridging the Cyber-Physical World with Robotics and Smart
                Sensors
              </h3>
              <time dateTime="2020-09-19T14:00:00">1400 - 1430</time>
              <h4>Chong Jia Yi</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-isham-mohammed">
              <h3>CBOR: For Faster M2M Communication</h3>
              <time dateTime="2020-09-19T14:30:00">1430 - 1500</time>
              <h4>Isham Mohammed</h4>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2020-09-19T15:00:00">1500 - 1515</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-kenneth-yt-lim-ahmed">
              <h3>
                The Socially Responsible Behaviour through Embodied Thinking
                (SORBET) Project: a COVID-19 response
              </h3>
              <time dateTime="2020-09-19T15:15:00">1515 - 1545</time>
              <h4>Kennth Y T Lim, Ahmed Hazyl Hilmy</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-juan-araya">
              <h3>Workshop: Hiding PII and malware with Stegware</h3>
              <time dateTime="2020-09-19T15:45:00">1545 - 1615</time>
              <h4>Juan Araya</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-nicolas-frankel">
              <h3>
                A Change-Data-Capture use-case: designing an evergreen cache
              </h3>
              <time dateTime="2020-09-19T16:15:00">1615 - 1645</time>
              <h4>Nicolas Frankel</h4>
            </ScheduleItem>
          </ScheduleTime>
          <ScheduleTitle>Day 2 : 20 September</ScheduleTitle>
          <ScheduleTime>
            <ScheduleItem>
              <h3>Ushering</h3>
              <time dateTime="2020-09-20T13:45:00">1345 - 1355</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2020-09-20T13:55:00">1355 - 1400</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-adrienne-tacke">
              <h3>Don't be Afraid of the Terminal</h3>
              <time dateTime="2020-09-20T14:00:00">1400 - 1430</time>
              <h4>Adrienne Tacke</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-tan-li-yuan-marcus-siddhant">
              <h3>
                Securing Singapore with Augmented Reality: a pandemic-proof
                prototype
              </h3>
              <time dateTime="2020-09-20T14:30:00">1430 - 1500</time>
              <h4>Tan Li Yuan Marcus, Siddhant Shrivastava</h4>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2020-09-20T15:00:00">1500 - 1515</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-melvin-zhang">
              <h3>META II: A compiler-compiler that generates its own code</h3>
              <time dateTime="2020-09-20T15:15:00">1515 - 1545</time>
              <h4>Melvin Zhang</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-milecia-mcgregor">
              <h3>
                Workshop: Making VR More Interesting with React and Brain.js
              </h3>
              <time dateTime="2020-09-20T15:45:00">1545 - 1615</time>
              <h4>Milecia McGregor</h4>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2020-09-20T16:15:00">1615 - 16:30</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-tamas-piros">
              <h3>Supercharge your JavaScript with Web Assembly</h3>
              <time dateTime="2020-09-20T16:30:00">1630 - 1700</time>
              <h4>Tamas Piros</h4>
            </ScheduleItem>
          </ScheduleTime>
        </div>
      </div>
    </div>
  </section>
)
