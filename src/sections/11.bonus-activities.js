import React from "react"
import styled, { css } from "styled-components"
import Console from "../components/console"
import wwc from "../../static/images/partners/womenwhocode.png"

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* font-size: 2.35vw; */
  }
`

export default () => (
  <section className="section-bonus" id="bonus">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            Bonus
            <br /> Activities
          </h2>
        </div>
        <div className="right">
          <section className="bonus">
            <Main>
              <Console id="ctf">
                <Console.Controls />
                <Console.Code
                  style={{ paddingLeft: "3vw", paddingRight: "3vw" }}
                >
                  <code>
                    <i className="c-b">$</i>
                    {" ./exploit.py"}
                  </code>
                  <code>
                    {"["}
                    <i className="c-y">+</i>
                    {"] Opening connection to ctf.makerforce.io"}
                  </code>
                  <code>{""}</code>
                  <code>{""}</code>
                  <code>{"              Geekcamp"}</code>
                  <code>{"           _       _  ____ _____ _____"}</code>
                  <code>{" _ __ ___ (_)_ __ (_)/ ___|_   _|  ___|"}</code>
                  <code>{"| '_ ` _ \\| | '_ \\| | |     | | | |_"}</code>
                  <code>{"| | | | | | | | | | | |___  | | |  _|"}</code>
                  <code>{"|_| |_| |_|_|_| |_|_|\\____| |_| |_|"}</code>
                  <code>{""}</code>
                  <code
                    dangerouslySetInnerHTML={{
                      __html:
                        "       Organised by <a target='_blank' rel='noreferrer noopener' href='https://osilayer8.makerforce.io/'>OSI Layer 8</a>",
                    }}
                  />
                  <code>{""}</code>
                  <code>{"Rules:"}</code>
                  <code>
                    {"1. Do not attack any other addresses or ports."}
                  </code>
                  <code>{"2. Do not use brute forcing tools or perform"}</code>
                  <code>{"   denial of service attacks."}</code>
                  <code>{"3. Play fair, don't share flags."}</code>
                  <code>{"4. Clarify if in doubt."}</code>
                  <code>{""}</code>
                  <code
                    dangerouslySetInnerHTML={{
                      __html:
                        "Get started at <a rel='noreferrer noopener' target='_blank' href='https://ctf.makerforce.io'>https://ctf.makerforce.io</a>",
                    }}
                  />
                  <code>{"Contest begins at 0945 and ends at 1800"}</code>
                  <code>{""}</code>
                  <code>
                    {"Enter your name: Oh no, I’ve been exploited :("}
                  </code>
                  <code>
                    {"["}
                    <i className="c-b">*</i>
                    {"] Switching to interactive mode"}
                  </code>
                  <code>
                    <i className="c-r">$</i>
                    {" whoami"}
                  </code>
                  <code>{"root"}</code>
                  <code>
                    <i className="c-r">$</i>
                    {" cat /flag.txt"}
                  </code>
                  <code>{"miniCTF{web_pwn_re_and_other_puzzles}"}</code>
                  <code>
                    <i className="c-r">$</i>
                    {" ^D"}
                  </code>
                  <code>
                    {"["}
                    <i className="c-b">*</i>
                    {"] Closed connection to ctf.makerforce.io"}
                  </code>
                  <code>{""}</code>
                </Console.Code>
              </Console>
              <Console id="ml-workshop">
                <Console.Controls />
                <Console.Code>
                  <img src={wwc} />
                  <code>
                    GeekcampSG has partnered with{" "}
                    <a
                      href="https://www.womenwhocode.com/singapore"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Women Who Code Singapore
                    </a>{" "}
                    to have their{" "}
                    <a
                      href="https://www.meetup.com/Women-Who-Code-Singapore/events/264579891/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Machines Learning and Edge Computing Workshop
                    </a>{" "}
                    as a concurrent track during the first half of the
                    conference. Do RSVP at the{" "}
                    <a
                      href="https://www.meetup.com/Women-Who-Code-Singapore/events/264579891/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      meetup.com event page
                    </a>{" "}
                    and bring your laptop for this workshop. This will be held
                    at Cardamom, Lvl 2 of Shaw Foundation Alumni House. All are
                    welcomed!
                  </code>
                  <code>{""}</code>
                </Console.Code>
              </Console>
            </Main>
          </section>
        </div>
      </div>
    </div>
  </section>
)
