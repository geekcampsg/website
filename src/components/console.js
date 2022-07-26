import React from "react"
import styled from "styled-components"

const Console = styled.div`
  width: 900px;
  max-width: 100%;
  margin-bottom: 1rem;
  background: ${(props) => (props.light ? "white" : "#282a35")};
  border-radius: 8px;
  ${(props) => (props.light ? "border: 1px solid #C4C4C4" : "")};

  @media screen and (min-width: 768px) {
    margin-bottom: 1.7rem;
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.65rem;
  svg {
    height: 15px;
    width: 60px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1.25rem;
    svg {
      height: auto;
      width: auto;
    }
  }
`

const SubTitle = styled.div`
  color: var(--white);
  font-family: "PT Mono", "Courier New", Courier, monospace;
  padding-right: 80px;
  margin: auto;
`

const Code = styled.pre`
  font-family: "Fira Code", "PT Mono", "Courier New", Courier, monospace;
  counter-reset: line;
  padding-left: 2rem;
  font-size: 2.35vw;
  color: #fff;
  margin-bottom: 0;
  margin-top: auto;

  i {
    font-style: normal;
  }

  code {
    line-height: 1.26;
    font-family: "Fira Code", "PT Mono", "Courier New", Courier, monospace;
    display: block;
    position: relative;
    padding: 0;
    font-size: inherit;
    white-space: pre-wrap;
    &::after {
      display: none;
    }
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

  @media screen and (min-width: 375px) {
    font-size: 2.65vw;
  }

  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    font-size: 1.33333rem;
  }
`

Console.Controls = ({ subTitle }) => (
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
    <SubTitle>{subTitle}</SubTitle>
  </TopBar>
)

Console.Code = Code
export default Console
