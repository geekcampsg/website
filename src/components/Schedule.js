import styled from "styled-components"

const Schedule = styled.ul`
  list-style: none;
  margin-left: 0;
`

const ScheduleTime = styled(Schedule)`
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

  h4 {
    display: block;
    color: #808081;
    font-weight: normal;
    font-size: 1.333333333rem;
    margin-bottom: 1.5rem;
    text-transform: none;
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

export { Schedule, ScheduleTime, ScheduleItem }
