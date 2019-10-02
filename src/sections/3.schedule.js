import React from "react"
import { ScheduleTime, ScheduleItem } from "../components/Schedule"

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
          <ScheduleTime>
            <ScheduleItem>
              <h3>Registration</h3>
              <time dateTime="2019-10-19T08:30:00">0830 - 0930</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2019-10-19T09:30:00">0930 - 0945</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-sau-sheong">
              <h3>
                How to create a web application in multiple programming
                languages
              </h3>
              <time dateTime="2019-10-19T09:45:00">0945 - 1015</time>
              <h4>Chang Sau Sheong</h4>
              <p>
                Tanuki is a polyglot web framework that allows you to develop
                web applications and services in multiple programming languages.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-kendrick">
              <h3>Building Web-Based Audio Player for Obscure Audio Format</h3>
              <time dateTime="2019-10-19T10:15:00">1015 - 1045</time>
              <h4>Kenrick</h4>
              <p>
                BRSTM is an audio file format that are used on Nintendo Wii
                games and many others. This talk will cover the journey in
                building this player which decodes the BRSTM file entirely on
                browser and plays it back using Web Audio API.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2019-10-19T10:45:00">1045 - 1115</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-renaldi">
              <h3>
                Implementing Open Source-Based Motion Controlled Robotic Arms
                with Python and C
              </h3>
              <time dateTime="2019-10-19T11:15:00">1115 - 1145</time>
              <h4>Renaldi Gondosubroto</h4>
              <p>
                This talk will demonstrate how to easily program two DIY open
                source motion-controlled robotic arms, demonstrating how to
                start your own mechatronics-related projects easily.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-hazwan">
              <h3>
                Don’t let your Internet Of Things become an Internet Of Targets
              </h3>
              <time dateTime="2019-10-19T11:45:00">1145 - 1215</time>
              <h4>Hazwan Hassan</h4>
              <p>
                As current and future homes become pre-wired for connectivity
                and home renovators start providing “smart home” services, it is
                time to take a look at how they can be setup to ensure safety.
                We will explore how network segregation techniques can be used
                at home to keep the network safe.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-subh">
              <h3>Creating Art from Music</h3>
              <time dateTime="2019-10-19T12:15:00">1215 - 1245</time>
              <h4>Subhransu Behera</h4>
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
              <time dateTime="2019-10-19T12:45:00">1245 - 1255</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Lunch</h3>
              <time dateTime="2019-10-19T12:55:00">1255 - 1355</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-yos">
              <h3>Workshop 1: Getting Started with Smart Contracts</h3>
              <time dateTime="2019-10-19T13:55:00">1355 - 1445</time>
              <h4>Yos Riady</h4>
              <p>
                Come and discover how you can write smart contracts and build
                decentralized applications! In this workshop, get a practical
                hands-on with the Solidity programming language.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-sudharshan">
              <h3>
                Love At First Byte: a romantic journey into the future of us
              </h3>
              <time dateTime="2019-10-19T14:45:00">1445 - 1515</time>
              <h4>Sudharshan</h4>
              <p>
                Love At First Byte, is a talk about humans, and how technology
                is going to shape us in the future. Discussing concepts like
                assistive technologies, brain machine interfaces, flying drones
                telepathically, and virtual realities. Simply put, this talk is
                a love story between mind and machine.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-weiyuan">
              <h3>Implementing Trigonometry in SCSS, and lessons learnt</h3>
              <time dateTime="2019-10-19T15:15:00">1515 - 1545</time>
              <h4>Liu Weiyuan</h4>
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
              <time dateTime="2019-10-19T15:45:00">1545 - 1615</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Workshop 2: Virtual Network Testbed Using GNS3</h3>
              <h4>Hazwan Hassan</h4>
              <time dateTime="2019-10-19T16:15:00">1615 - 1705</time>
              <p>
                Ever wanted to build complex virtual networks to test and
                practice networking concepts or build a test production
                environment for practicing software development but find
                building such networks difficult? In this workshop, learn about
                GNS3 and how to build and manage virtual networks visually.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-dipesh">
              <h3>
                WebThings: A secure gateway to connect your things to Internet
              </h3>
              <time dateTime="2019-10-19T17:05:00">1705 - 1735</time>
              <h4>Dipesh Monga</h4>
              <p>
                With the advent of the IoT, are we really making our lives
                simpler or drowning ourselves in a vast ocean by uploading our
                lives to the internet? WebThings is an open platform for
                monitoring and controlling devices over the web that comes to
                the rescue.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-michael">
              <h3>The Singapore Tech Community - A 10 year retrospective</h3>
              <time dateTime="2019-10-19T17:35:00">1735 - 1805</time>
              <h4>Michael Cheng</h4>
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
              <time dateTime="2019-10-19T18:05:00">1805 - 1810</time>
            </ScheduleItem>
          </ScheduleTime>
        </div>
      </div>
    </div>
  </section>
)
