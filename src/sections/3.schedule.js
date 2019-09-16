import React from "react"
import styled from "styled-components"

const Schedule = styled.ul`
  list-style: none;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    padding-left: 13rem;
  }
`

const ScheduleItem = styled.li`
  position: relative;
  padding: 0 0 3.5rem 2rem;
  margin-bottom: 0;

  &::before {
    content: "";
    background: #61bfad;
    border-radius: 100%;
    width: 1.38888rem;
    height: 1.38888rem;
    position: absolute;
    margin-left: -1px;
    left: 0;
    top: 0.277777778rem;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.277777778rem;
    bottom: -0.277777778rem;
    border-left: 1px solid #2b292d;
    left: 0;
    margin-left: 0.625rem;
  }

  time {
    display: block;
    font-size: 1.777777778rem;
    line-height: 1;
    margin: 0.5rem 0;
  }

  &:last-child::after {
    display: none;
  }

  strong {
    display: block;
    color: #808081;
    font-weight: normal;
    font-size: 1.333333333rem;
  }

  @media screen and (min-width: 768px) {
    time {
      position: absolute;
      left: -13rem;
      top: 0;
      margin: 0;
    }

    &::before {
      transform: translateX(-50%);
    }
    &::after {
      left: -1px;
      margin-left: 0;
    }
  }
`

export default () => (
  <section className="section-schedule" id="schedule">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            schedule <br /> 19 Oct 19
          </h2>
        </div>
        <div className="right">
          <Schedule>
            <ScheduleItem>
              <h3>Registration</h3>
              <time dateTime="2019-10-19T08:30:00">0830 - 0930</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2019-10-19T09:30:00">0930 - 0945</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Sponsor Talk</h3>
              <time dateTime="2019-10-19T09:45:00">0945 - 0950</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>
                How to create a web application in multiple programming
                languages
              </h3>
              <time dateTime="2019-10-19T09:50:00">0950 - 1020</time>
              <strong>Chang Sau Sheong</strong>
              <p>
                Tanuki is a polyglot web framework that allows you to develop
                web applications and services in multiple programming languages.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Building Web-Based Audio Player for Obscure Audio Format</h3>
              <time dateTime="2019-10-19T10:20:00">1020 - 1050</time>
              <strong>Kenrick</strong>
              <p>
                BRSTM is an audio file format that are used on Nintendo Wii
                games and many others. This talk will cover the journey in
                building this player which decodes the BRSTM file entirely on
                browser and plays it back using Web Audio API.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2019-10-19T10:50:00">1050 - 1120</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>
                Implementing Open Source-Based Motion Controlled Robotic Arms
                with Python and C
              </h3>
              <time dateTime="2019-10-19T11:20:00">1120 - 1150</time>
              <strong>Renaldi Gondosubroto</strong>
              <p>
                This talk will demonstrate how to easily program two DIY open
                source motion-controlled robotic arms, demonstrating how to
                start your own mechatronics-related projects easily.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>
                Don’t let your Internet Of Things become an Internet Of Targets
              </h3>
              <time dateTime="2019-10-19T11:50:00">1150 - 1220</time>
              <strong>Hazwan Hassan</strong>
              <p>
                As current and future homes become pre-wired for connectivity
                and home renovators start providing “smart home” services, it is
                time to take a look at how they can be setup to ensure safety.
                We will explore how network segregation techniques can be used
                at home to keep the network safe.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Creating Art from Music</h3>
              <time dateTime="2019-10-19T12:20:00">1220 - 1250</time>
              <strong>Subhransu Behera</strong>
              <p>
                3 years ago I wanted to work on a project where I wanted to
                convert any image (art piece, selfie, random portrait) into
                music. The idea is based on mapping colors to musical notes. I
                spoke to a pianist and he asked - can you create an art from
                music instead. A unique art when someone plays music.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Group Photo</h3>
              <time dateTime="2019-10-19T12:50:00">1250 - 1300</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Lunch</h3>
              <time dateTime="2019-10-19T13:00:00">1300 - 1400</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Workshop 1: Getting Started with Smart Contracts</h3>
              <time dateTime="2019-10-19T14:00:00">1400 - 1450</time>
              <strong>Yos Riady</strong>
              <p>
                Come and discover how you can write smart contracts and build
                decentralized applications! In this workshop, get a practical
                hands-on with the Solidity programming language.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>
                Love At First Byte: a romantic journey into the future of us
              </h3>
              <time dateTime="2019-10-19T14:50:00">1450 - 1520</time>
              <strong>Sudharshan</strong>
              <p>
                Love At First Byte, is a talk about humans, and how technology
                is going to shape us in the future. Discussing concepts like
                assistive technologies, brain machine interfaces, flying drones
                telepathically, and virtual realities. Simply put, this talk is
                a love story between mind and machine.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Implementing Trigonometry in SCSS, and lessons learnt</h3>
              <time dateTime="2019-10-19T15:20:00">1520 - 1550</time>
              <strong>Liu Weiyuan</strong>
              <p>
                Basic CSS is insufficient. We use Sass (SCSS) to push the
                stylesheet language to the limit, where it’s similar to a
                programming language. Through implementing Trigonometry in SCSS
                as an example, we harness engineering principles such as code
                reuse, and perform unit-testing of SCSS functions.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2019-10-19T15:50:00">1550 - 1620</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Workshop 2: Virtual Network Testbed Using GNS3</h3>
              <strong>Hazwan Hassan</strong>
              <time dateTime="2019-10-19T16:20:00">1620 - 1710</time>
              <p>
                Ever wanted to build complex virtual networks to test and
                practice networking concepts or build a test production
                environment for practicing software development but find
                building such networks difficult? In this workshop, learn about
                GNS3 and how to build and manage virtual networks visually.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>
                WebThings: A secure gateway to connect your things to Internet
              </h3>
              <time dateTime="2019-10-19T17:10:00">1710 - 1740</time>
              <strong>Dipesh Monga</strong>
              <p>
                With the advent of the IoT, are we really making our lives
                simpler or drowning ourselves in a vast ocean by uploading our
                lives to the internet? WebThings is an open platform for
                monitoring and controlling devices over the web that comes to
                the rescue.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>The Singapore Tech Community - A 10 year retrospective</h3>
              <time dateTime="2019-10-19T17:40:00">1740 - 1810</time>
              <strong>Michael Cheng</strong>
              <p>
                A talk on the development of the local technology meetup scene
                through the eyes of a community builder & organizer. I’ll show
                the progression from our humble beginnings and how foreign
                talent and different overseas student exchange programs have
                shaped the local tech and startup scene.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Closing</h3>
              <time dateTime="2019-10-19T18:10:00">1810 - 1815</time>
            </ScheduleItem>
          </Schedule>
        </div>
      </div>
    </div>
  </section>
)
