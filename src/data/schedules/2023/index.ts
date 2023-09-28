const sessionizeScheduleUrl =
  'https://sessionize.com/api/v2/sedrhdzi/view/GridSmart';
const sessionizeSchedule = await (await fetch(sessionizeScheduleUrl)).json();

const sessionizeSpeakersUrl =
  'https://sessionize.com/api/v2/sedrhdzi/view/Speakers';
const sessionizeSpeakers = await (await fetch(sessionizeSpeakersUrl)).json();

const speakers = sessionizeSpeakers
  .filter((speaker) => !speaker.fullName.includes('Barcamp'))
  .map((speaker) => ({
    name: speaker.fullName,
    id: `sessionize-${speaker.id}`,
    imgUrl: { default: speaker.profilePicture },
    position: speaker.tagLine,
    bio: speaker.bio,
    twitter: speaker.links
      ?.filter((link) => link.linkType == 'Twitter')
      .map((link) => link.url.split('/').pop())
      .reduce((acc, link) => link || null, null),
  }));

const schedule = {
  year: 2023,
  timeZone: 'Asia/Singapore',
  dates: sessionizeSchedule.map((date) => ({
    date: date.date,
    timeZone: 'Asia/Singapore',
    talks: date.rooms
      .flatMap((room) =>
        room.sessions.map((session) => ({
          title: session.title,
          summary: session.description,
          startTime: session.startsAt,
          endTime: session.endsAt,
          track: session.room.replace('Track ', ''),
          id: `sessionize-${session.id}`,
          video: session.recordingUrl,
          speakers: session.title.includes('BarcampSG')
            ? []
            : session.speakers.map((speaker) => ({
                id: `sessionize-${speaker.id}`,
                name: speaker.name,
                imgUrl: sessionizeSpeakers
                  .filter((s) => s.id == speaker.id)
                  .map((s) => ({
                    default: s.profilePicture,
                  }))
                  .pop(),
              })),
        })),
      )
      .sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime)),
  })),
} as const;

const tracks = Array.from(
  new Set(
    schedule.dates
      .flatMap((date) => date.talks.map((talk) => talk.track!))
      .filter(Boolean),
  ),
);

export { schedule, speakers, tracks };
