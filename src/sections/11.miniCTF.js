import React from "react"
import styled from "styled-components"
import Console from "../components/console"

const Main = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  i {
    font-style: normal;
  }
  .c-y {
    color: var(--yellow);
  }
  .c-b {
    color: var(--blue);
  }
  .c-r {
    color: var(--red);
  }
  .c-g {
    color: var(--green);
  }
  .codeblock {
    display: block;
  }
  .codeblock.s-1 {
    margin-left: 2ch;
  }
  .codeblock.s-2 {
    margin-left: 4ch;
  }
  .codeblock.s-3 {
    margin-left: 6ch;
  }
  @media screen and (min-width: 768px) {
    padding: 1.7rem;
    .codeblock.codeblock {
      display: inline;
      margin-left: 0;
    }
  }
`

export default () => (
  <section className="section-coc" id="coc">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>
            MiniCTF
            <br /> Challenge
          </h2>
        </div>
        <div className="right">
          <section className="minictf">
            <Main>
              <Console>
                <Console.Controls />
                <Console.Code lineNumbers>
                  <code>
                    <i className="c-g">{`{`}</i>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-b">"</i>
                    <i className="c-y">title</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <div className="codeblock s-2">
                      <i className="c-b">"</i>GeekcampSG 2019
                      <i className="c-b">"</i>
                      <i className="c-g">,</i>
                    </div>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-b">"</i>
                    <i className="c-y">startDate</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <div className="codeblock s-2">
                      <i className="c-b">"</i>2019-10-19T08:30
                      <i className="c-b">"</i>
                      <i className="c-g">,</i>
                    </div>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-b">"</i>
                    <i className="c-y">endDate</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <div className="codeblock s-2">
                      <i className="c-b">"</i>2019-10-19T18:15
                      <i className="c-b">"</i>
                      <i className="c-g">,</i>
                    </div>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-b">"</i>
                    <i className="c-r">location</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: {`{`}</i>
                  </code>
                  <code>
                    {`    `}
                    <i className="c-b">"</i>
                    <i className="c-r">name</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <i className="c-b">"</i>Shaw Foundation Alumni House, NUS
                    <i className="c-b">"</i>
                    <i className="c-g">,</i>
                  </code>
                  <code>
                    {`    `}
                    <i className="c-b">"</i>
                    <i className="c-r">address</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <i className="c-b">"</i>Auditorium Level 2
                    <i className="c-g">,</i>
                  </code>
                  <code>
                    {`      `}
                    <i>
                      11 Kent Ridge Drive<i className="c-g">,</i> Singapore
                      119244
                    </i>
                    <i className="c-b">"</i>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-g">{`}`}</i>
                  </code>
                  <code>
                    {`  `}
                    <i className="c-b">"</i>
                    <i className="c-g">description</i>
                    <i className="c-b">"</i>
                    <i className="c-g">: </i>
                    <div className="codeblock s-2">
                      <i className="c-b">"</i>Join us for an eventful day of
                    </div>
                  </code>
                  <code>
                    {`    `}
                    <i>geek talks.</i>
                    <i className="c-b">"</i>
                  </code>
                  <code>
                    <i className="c-g">{`}`}</i>
                  </code>
                </Console.Code>
              </Console>
            </Main>
          </section>
        </div>
      </div>
    </div>
  </section>
)
