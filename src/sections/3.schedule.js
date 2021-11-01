import React from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

import {
  ScheduleTime,
  ScheduleItem,
  ScheduleTitle,
} from "../components/Schedule"
import Event2021 from "../../data/current/2021.json"

const xss = require("xss")

dayjs.extend(utc)
dayjs.extend(timezone)

const formatTime = (time, timeZone) => {
  return dayjs(time).tz(timeZone).format("HHmm");
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
            const dateFmt = dayjs(day.date).tz(day.timeZone).format("dddd, D MMMM YYYY")
            return (
              <React.Fragment key={`${day}-${index}`}>
                <ScheduleTitle>Day {index+1} : {dateFmt}</ScheduleTitle>
                <ScheduleTime>
                  {day.talks.map((talk, index) => {
                    const start = formatTime(talk.startTime, day.timeZone);
                    const end = formatTime(talk.endTime, day.timeZone);

                    return (
                      <ScheduleItem
                        key={`${talk.title}-${index}`}
                        id={talk.speakerId}
                      >
                        <h3>{talk.title}</h3>
                        <time
                          dateTime={talk.startTime}
                        >{`${start} - ${end}`}</time>
                        {talk.speaker && <h4>{talk.speaker}</h4>}
                        {talk.summary && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: xss(talk.summary),
                            }}
                          />
                        )}
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

export default Schedule
