import React from "react"
import styled from "styled-components"

const Console = styled.div`
  width: 850px;
  max-width: 100%;
  margin-bottom: 1rem;
  background: #282a35;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.7rem;
  }
`

const TopBar = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.65rem;
  svg {
    height: 15px;
    width: 60px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-left: 1.25rem;
    svg {
      height: auto;
      width: auto;
    }
  }
`

const Code = styled.pre`
  counter-reset: line;
  padding-left: 2rem;
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 0;
  margin-top: auto;

  code {
    line-height: 1.26;
    font-family: "PT Mono", "Courier New", Courier, monospace;
    display: block;
    position: relative;
    padding: 0;
    font-size: inherit;
    white-space: pre-wrap;
    ${({ lineNumbers }) =>
      lineNumbers &&
      `
        &::before {
      content: counter(line);
      counter-increment: line;
      position: absolute;
      right: 100%;
      margin-right: 0.75rem;
      color: #6b727e;
      letter-spacing: 0;
    }
      `}
  }

  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    font-size: 1.33333rem;
  }
`

Console.Controls = () => (
  <TopBar>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="21"
      viewBox="0 0 54 14"
    >
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle
          cx="6"
          cy="6"
          r="6"
          fill="#FF8B8B"
          stroke="#FA7C7C"
          strokeWidth=".5"
        ></circle>
        <circle
          cx="26"
          cy="6"
          r="6"
          fill="#F0CF61"
          stroke="#EBC64C"
          strokeWidth=".5"
        ></circle>
        <circle
          cx="46"
          cy="6"
          r="6"
          fill="#61BFAD"
          stroke="#46AE9A"
          strokeWidth=".5"
        ></circle>
      </g>
    </svg>
  </TopBar>
)

Console.Code = Code
export default Console
