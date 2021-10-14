import React from "react"
import {
  ScheduleTime,
  ScheduleItem,
  ScheduleTitle,
} from "../components/Schedule"

const Schdedule = () => (
  <section className="section-schedule" id="schedule">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>schedule</h2>
        </div>
        <div className="right">
          <ScheduleTitle>Day 1 : 6 November</ScheduleTitle>
          <ScheduleTime>
            <ScheduleItem>
              <h3>Say hi!</h3>
              <time dateTime="2021-11-06T13:30:00+08:00">1330 - 1400</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2021-11-06T14:00:00+08:00">1400 - 1410</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-tan-jian-zhen">
              <h3>Machine Learning Supercharged with Elixir</h3>
              <time dateTime="2021-11-06T14:10:00+08:00">1410 - 1450</time>
              <h4>Tan Jian Zhen</h4>
              <p>
                Machine learning is traditionally done on Python and Jupyter
                Notebooks, but a small team looked at the issues of the
                traditional way of doing things and the strengths of Elixir and
                made an amazing workflow. Ideally, the goal is to introduce
                people to the strengths of Elixir.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-mohammad-shahbaz-alam">
              <h3>Passwords are old, use WebAuthn</h3>
              <time dateTime="2021-11-06T14:50:00+08:00">1450 - 1530</time>
              <h4>Mohammad Shahbaz Alam</h4>
              <p>
                What if we could build our authentication processes in a way the
                user doesn’t need a password? I will give a quick overview of
                the past, present, and future of authentication. From basic
                authentication to passwordless biometric authentication using
                web authentication API, and everything in between.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2021-11-06T15:30:00+08:00">1530 - 1550</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-elad-shechter">
              <h3>How to Create Pure CSS Games</h3>
              <time dateTime="2021-11-06T15:50:00+08:00">1550 - 1630</time>
              <h4>Elad Shechter</h4>
              <p>
                Elad Shechter took his free time at home to create a pure CSS
                game. He will explain to you lots of tips and tricks on how to
                create pure CSS games, based on the Coronavirus game he made:{" "}
                <a
                  href="https://codepen.io/elad2412/pen/wvabjXy"
                  target="_blank" rel="noreferrer"
                >
                  https://codepen.io/elad2412/pen/wvabjXy
                </a>
                .
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-henning-schwentner">
              <h3>(An introduction to) Domain Storytelling</h3>
              <time dateTime="2021-11-06T16:30:00+08:00">1630 - 1710</time>
              <h4>Henning Schwentner</h4>
              <p>
                Domain Storytelling is a collaborative modeling method. It
                brings together domain experts and development teams. It means
                that we let our users tell us stories about their work. While
                listening, we record the stories using a pictographic language.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2021-11-06T17:10:00+08:00">1710 - 1730</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-mete-atamel">
              <h3>Choreography vs Orchestration in serverless microservices</h3>
              <time dateTime="2021-11-06T17:30:00+08:00">1730 - 1810</time>
              <h4>Mete Atamel</h4>
              <p>
                Should there be a central orchestrator controlling all
                interactions between services or should each service work
                independently and only interact through shared events? In this
                talk, we’ll explore the Choreography vs Orchestration question
                and see demos of some of the tools that can help.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Closing</h3>
              <time dateTime="2021-11-06T18:10:00+08:00">1810 - 1820</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Social</h3>
              <time dateTime="2021-11-06T18:20:00+08:00">1820 - 1900</time>
              <p>Meet other people in our virtual space</p>
            </ScheduleItem>
          </ScheduleTime>
          <ScheduleTitle>Day 2 : 7 November</ScheduleTitle>
          <ScheduleTime>
            <ScheduleItem>
              <h3>Say hi!</h3>
              <time dateTime="2021-11-07T08:30:00+08:00">0830 - 0900</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Opening</h3>
              <time dateTime="2021-11-07T09:00:00">0900 - 0910</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-dmitry-vinnik">
              <h3>The 10,000 Steps of Open Source Project Health</h3>
              <time dateTime="2021-11-07T09:10:00">0910 - 0950</time>
              <h4>Dmitry Vinnik</h4>
              <p>
                In this talk, we will look at the approach that Facebook Open
                Source team takes to measure the current state of Facebook open
                source projects, and how we use these metrics to prioritize and
                to direct our DevRel focus. We aim to show how by looking at
                information about your open source communities.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-kenzie-woodbridge">
              <h3>Everyone's a player (in a mid-90s MUD)</h3>
              <time dateTime="2021-11-07T09:50:00">0950 - 1030</time>
              <h4>Kenzie Woodbridge</h4>
              <p>
                This talk takes the approach of applying Player Type Theory
                (from game design) to getting people involved and engaged in
                technical and documentation projects in a technical environment.
                Practical tips are offered for dealing with lack of engagement,
                human-caused delays, and even workplace bullying.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Break</h3>
              <time dateTime="2021-11-07T10:30:00">1030 - 1050</time>
            </ScheduleItem>
            <ScheduleItem id="speaker-rob-richardson">
              <h3>The Definitive Deep Dive into the .git Folder</h3>
              <time dateTime="2021-11-07T10:50:00">1050 - 1130</time>
              <h4>Rob Richardson</h4>
              <p>
                What’s in the .git folder? We’ll dive deep into the objects
                folder, unpack commits, look at the types of DAG nodes, examine
                object content, and build a complete visualization of the stored
                content. We’ll also quickly look through Git hooks, Git config,
                and ref logs. Come experience the zen of git.
              </p>
            </ScheduleItem>
            <ScheduleItem id="speaker-karan-balkar">
              <h3>Demystifying the Java Flight Recorder API</h3>
              <time dateTime="2021-11-07T11:30:00">1130 - 1210</time>
              <h4>Karan Balkar</h4>
              <p>
                This talk will be useful for developers who wish to monitor the
                performance of the applications especially in case of heavy data
                loads. It will help developers to understand how to use and
                integrate the JFR APIs in their existing Java based projects
                seamlessly along with the best practices.
              </p>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Closing</h3>
              <time dateTime="2021-11-07T12:10:00">1210 - 1220</time>
            </ScheduleItem>
            <ScheduleItem>
              <h3>Social</h3>
              <time dateTime="2021-11-06T12:20:00+08:00">1220 - 1330</time>
              <p>Meet other people in our virtual space</p>
            </ScheduleItem>
          </ScheduleTime>
        </div>
      </div>
    </div>
  </section>
)

export default Schdedule;
