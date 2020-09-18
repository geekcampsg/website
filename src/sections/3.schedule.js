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
              <h4>Ambrose</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-chong-jia-yi">
              <h3>
                Bridging the Cyber-Physical World with Robotics and Smart
                Sensors
              </h3>
              <time dateTime="2020-09-19T14:00:00">1400 - 1430</time>
              <h4>Chong Jia Yi</h4>
              <p>
                GovTech’s Digital Operations Smart Services (DOSS) platform uses
                deep learning to develop smart sensors and autonomous robotics.
                The robot dog SPOT and smart thermal scanner SPOTON were both
                developed on the DOSS platform. Jia Yi will share his
                experiences developing DOSS and plans for the platform.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-isham-mohammed">
              <h3>CBOR: For Faster M2M Communication</h3>
              <time dateTime="2020-09-19T14:30:00">1430 - 1500</time>
              <h4>Isham Mohammed</h4>
              <p>
                In this talk, Isham will introduce CBOR (RFC 7049 standard) to
                the audience and explain the essence of the existence of CBOR
                and how that makes M2M communication faster.
              </p>
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
              <h4>Kenneth Y T Lim, Ahmed Hazyl Hilmy</h4>
              <p>
                Have you been thinking about how settings of learning might be
                designed to help nurture socially responsible behaviour, such as
                investing the self-discipline to develop the habit of social
                distancing? Both Kenneth and Ahmed will invite you to their
                sharing on the SORBET Project.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-juan-araya">
              <h3>Workshop: Hiding PII and malware with Stegware</h3>
              <time dateTime="2020-09-19T15:45:00">1545 - 1615</time>
              <h4>Juan Araya</h4>
              <p>
                In this workshop, learn what is steganography, how it can be
                used to hide PII data and even send malware and C&C IPs on
                pictures and audio files.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-nicolas-frankel">
              <h3>
                A Change-Data-Capture use-case: designing an evergreen cache
              </h3>
              <time dateTime="2020-09-19T16:15:00">1615 - 1645</time>
              <h4>Nicolas Frankel</h4>
              <p>
                CDC is a brand new approach that "turns the database inside
                out": it allows to get events out of the database state. This
                can be leveraged to get a cache that is never stale.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-closing">
              <h3>Closing</h3>
              <time dateTime="2020-09-19T16:15:00">1645 - 1650</time>
              <h4>Ambrose</h4>
              <p>
                Thanks all & see you tmr!
              </p>
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
              <h4>Terence</h4>
            </ScheduleItem>
            <ScheduleItem id="speaker-adrienne-tacke">
              <h3>Don't be Afraid of the Terminal</h3>
              <time dateTime="2020-09-20T14:00:00">1400 - 1430</time>
              <h4>Adrienne Tacke</h4>
              <p>
                At some point in our developer careers, we've all looked at this
                intimidating window of darkness called the terminal. Despite its
                efficiency & power, many choose GUIs instead. Adrienne will
                demystify the terminal, from its origins up to its powerful
                commands. You'll leave a new fan of the terminal!
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-tan-li-yuan-marcus-siddhant">
              <h3>
                Securing Singapore with Augmented Reality: a pandemic-proof
                prototype
              </h3>
              <time dateTime="2020-09-20T14:30:00">1430 - 1500</time>
              <h4>Tan Li Yuan Marcus, Siddhant Shrivastava</h4>
              <p>
                PlantAR is an AR application for securing our National Critical
                Infrastructures in COVID19. The talk and live demo will share
                the best practices learned about designing pandemic-proof
                teleoperation software through the lens of a hobby project in an
                operational Cyber-Physical Systems testbed.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2020-09-20T15:00:00">1500 - 1515</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-melvin-zhang">
              <h3>META II: A compiler-compiler that generates its own code</h3>
              <time dateTime="2020-09-20T15:15:00">1515 - 1545</time>
              <h4>Melvin Zhang</h4>
              <p>
                Most of the time we treat compilers as black boxes but what
                really goes on under the hood? In this demo, I will demonstrate
                a DSL for writing compilers and a compiler-compiler that turns
                the DSL into a compiler. Amazingly, we can describe the
                compiler-compiler itself in only 26 lines of the DSL.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-tamas-piros">
              <h3>Supercharge your JavaScript with Web Assembly</h3>
              <time dateTime="2020-09-20T15:45:00">1545 - 1615</time>
              <h4>Tamas Piros</h4>
              <p>
                Browser & Web APIs along with JavaScript have seen an incredible
                amount of enhancement over the past decade, however they still
                have certain limitations. With the rise of Web Assembly we can
                easily enhance JavaScript and give application(s) access to
                low-level processing & transform web experiences.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-closing">
              <h3>Closing</h3>
              <time dateTime="2020-09-20T16:15:00">1615 - 1620</time>
              <h4>Terence</h4>
              <p>
                Thanks all!
              </p>
            </ScheduleItem>
          </ScheduleTime>
        </div>
      </div>
    </div>
  </section>
)
