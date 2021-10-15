import React from "react"

import {
  ScheduleTime,
  ScheduleItem,
  ScheduleTitle,
} from "../components/Schedule"
import Event2021 from "../../data/current/2021.json";

const xss = require("xss");

const padZero = (timeComp, places) => {
  let result = timeComp.toString();
  while (result.length < places) {
    result = "0" + result;
  }
  return result;
}

const formatTime = (time) => {
  const fDate = new Date(time);
  const strDate = padZero(fDate.getHours(), 2) + padZero(fDate.getMinutes(), 2);
  return strDate;
}

const Schedule = () => (
  <section className="section-schedule" id="schedule">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>schedule</h2>
        </div>
        <div className="right">
          <p>Time shown is in SGT (UTC+8)</p>
          {Event2021.dates.map((day, index) => {
            return (
              <React.Fragment key={`${day}-${index}`}>
                <ScheduleTitle>Day {index+1} : {day.date}</ScheduleTitle>
                <ScheduleTime>
                  {day.talks.map((talk, index) => {
                    const start = formatTime(talk.startTime);
                    const end = formatTime(talk.endTime);

                    return (
                      <ScheduleItem key={`${talk.title}-${index}`} id={talk.speakerId}>
                        <h3>{talk.title}</h3>
                        <time dateTime={talk.startTime}>{`${start} - ${end}`}</time>
                        {talk.speaker && <h4>{talk.speaker}</h4>}
                        {talk.summary && <p dangerouslySetInnerHTML={{ __html: xss(talk.summary)}} />}
                      </ScheduleItem>
                    )
                  })}
                </ScheduleTime>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Schedule;
