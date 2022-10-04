import React from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

import {
  ScheduleDate,
  ScheduleTime,
  ScheduleItem,
  ScheduleTitle,
  ScheduleTrack,
} from "../components/Schedule"
import Event2022 from "../../data/current/2022.json"

const xss = require("xss")

dayjs.extend(utc)
dayjs.extend(timezone)

const formatTime = (time, timeZone) => {
  return dayjs(time).tz(timeZone).format("HHmm")
}

const Schedule = () => (
  <section className="section-schedule" id="schedule">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>schedule - Oct 29, 2022</h2>
        </div>
        <div className="right">
          <p>Time shown is in SGT (UTC+8)</p>
          <ScheduleTime>
            {Event2022.talks.map((talk, index) => {
              const start = formatTime(talk.startTime, Event2022.timeZone)
              const end = formatTime(talk.endTime, Event2022.timeZone)
              return (
                <ScheduleItem key={`${talk.title}-${index}`} id={talk.id}>
                  <h3>{talk.title}</h3>
                  <time dateTime={talk.startTime}>{`${start} - ${end}`}</time>
                  {talk.speakers ? (
                    <h4>
                      {talk.speakers.map((speaker, index) => (
                        <React.Fragment key={speaker.id}>
                          <a href={`#${speaker.id}`}>{speaker.name}</a>
                          {index < talk.speakers.length - 1 ? ", " : null}
                        </React.Fragment>
                      ))}
                    </h4>
                  ) : null}
                  {talk.track ? (
                    <ScheduleTrack track={talk.track}>Track {talk.track}</ScheduleTrack>
                  ) : null}
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
        </div>
      </div>
    </div>
  </section>
)

export default Schedule
