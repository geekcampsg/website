import * as cfp from '@src/data/cfp';
import { year } from '@src/data/date';
import {
  ticketLink,
  venueLink,
  venueName,
  volunteerLink,
} from '@src/data/links';
import { formatDateFull } from '@src/utils/date-format';

const cmdWithoutArg = [
  'help',
  'cfp',
  'pwd',
  'clear',
  'ls',
  'register',
  'volunteer',
  'location',
  'dir',
  'date',
  'sponsors',
  'archives',
  'contact',
  'game',
  'schedule',
  'q',
];

export default function handleTerminal({
  ctrl,
  key,
  input,
  value,
  dispatch,
  clear,
  clearLogs,
  reply,
  geekcampDate,
}: {
  ctrl: boolean;
  key: string;
  input: HTMLInputElement;
  value: string;
  dispatch: (event: string) => boolean;
  clear: () => void;
  clearLogs: () => void;
  reply: (string: string) => void;
  geekcampDate: string | undefined;
}) {
  if (ctrl) {
    if (key === 'u') {
      clear();
    }
    if (key === 'c') {
      reply(`$ ${value.trim()}`);
      clear();
    }
    if (key === 'k') {
      clearLogs();
      clear();
    }
    return;
  }

  // enter is pressed
  if (key === 'Enter') {
    const { top, height } = input.getBoundingClientRect();
    const theY = window.scrollY + top;

    // adjust window scroll
    if (top < 0) {
      // above
      window.scroll(0, theY);
    } else if (theY > window.scrollY + window.innerHeight - height - 26) {
      // below
      window.requestAnimationFrame(function () {
        const { top, height } = input.getBoundingClientRect();
        const theY = window.scrollY + top;
        window.scroll(0, theY - window.innerHeight + height + 26);
      });
    }

    // handle cmds
    let val;
    const userInput = value;
    const trimmed = userInput.trim();
    let invalidCmd = false;
    if (!trimmed) {
      reply('=>');
      clear();
      return false;
    }
    const matched = trimmed.match(/^(\S+)((\s+)(.*))?$/);
    const cmd = matched[1];
    const arg = matched[matched.length - 1];

    if (cmdWithoutArg.indexOf(cmd) > -1) {
      // display error if arguments found
      if (arg) {
        val = `${cmd}: illegal option ${arg}`;
      } else {
        if (cmd === 'help') {
          val =
            'Available commands: cfp, register, volunteer, location, date, archives';
        } else if (cmd === 'pwd') {
          val = `/geekcamp/${year}`;
        } else if (cmd === 'clear') {
          clearLogs(true);
          clear();
          return;
        } else if (cmd === 'cfp') {
          if (+Date.now() > +cfp.deadline) {
            val =
              "Call for Proposals is now closed. Thank you for your interest. Check out the <a href='#schedule'>schedule here</a>";
          } else {
            window.open(cfp.link);
          }
        } else if (cmd === 'register') {
          if (ticketLink) {
            val = `<a href="${ticketLink}">Get tickets!</a>`;
          } else {
            val = 'Registration is not open yet';
          }
        } else if (cmd === 'volunteer') {
          val = `<a href="${volunteerLink}">Volunteer with us</a>`;
        } else if (cmd === 'location') {
          val = `In-person: <a href="${venueLink}">${venueName}</a><br>Online: Discord`;
        } else if (cmd === 'dir') {
          val = 'Bad command or file name';
        } else if (cmd === 'ls') {
          val = 'These are not the files you are looking for.';
        } else if (cmd === 'date') {
          const today = new Date();
          const firstDay = geekcampDate ? new Date(geekcampDate) : undefined;
          val = `Today is <b>${formatDateFull(today)}</b>.`;
          if (!firstDay) {
            val += `<br />Geekcamp SG date is not confirmed!`;
          } else if (+firstDay > +today) {
            val += `<br />Geekcamp SG is on <b>${formatDateFull(
              firstDay
            )}.</b><br /><br />`;
            const diff = Math.round(
              (+firstDay - +today) /
              1000 /* milliseconds */ /
              60 /* seconds */ /
              60 /* minutes */ /
              24 /* hours */
            );
            val += `${diff} more day${diff > 1 ? 's' : ''} to go!`;
          }
        } else if (cmd === 'contact') {
          val = 'geekcampsingapore at gmail dot com';
        } else if (cmd === 'archives') {
          location.href = '/past-events';
        } else if (cmd === 'game') {
          val = 'Starting game...';
          import('./Game/index.svelte').then(() => {
            dispatch('gameOn');
          });
        } else if (cmd === 'schedule') {
          location.hash = 'schedule';
        }
      }
    } else {
      if (cmd === 'print' || cmd === 'echo') {
        val = arg || ''; // print newline if no args
      } else if (cmd === 'speakers') {
        if (arg && arg === '--all') {
          val = 'Send in your talks to be a speaker';
        } else {
          val = 'Send in your talks to be a speaker (--all)';
        }
      } else if (cmd === 'cd') {
        val = 'You are already where you are supposed to be.';
      } else if (cmd === 'mkdir' || cmd === 'rm') {
        val = 'Permission denied';
      } else if (cmd === 'sudo') {
        val = 'Your sudo has no power here.';
      } else {
        invalidCmd = true;
        val = `command not found: ${cmd}`;
      }
    }
    if (invalidCmd) {
      reply(`=> ${cmd.split(/\s+/)[0]}`);
    } else {
      reply(`=> ${trimmed}`);
    }

    reply(val);
    clear();

    // gtm push
    typeof window !== 'undefined' &&
      window.dataLayer &&
      window.dataLayer.push({
        input: userInput,
        output: val,
        event: 'terminalResponse',
      });
  }
  return false;
}
