import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Console from "./console"

const Terminal = styled(Console.Code)`
  height: auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  .input {
    background: transparent;
    border: none;
    line-height: 1.25;
    color: #fff;
    flex: 1;
    box-shadow: none;

    &:focus {
      outline: none;
    }
  }

  .intro {
    /* &::before {
      content: ">>";
      position: absolute;
      right: 100%;
      letter-spacing: 0;
      margin-right: 0.5rem;
    } */
  }

  .promptline {
    display: flex;
    align-items: center;
  }

  .prompt {
    margin-right: 0.75rem;
    color: var(--green);
  }
`
const ENTER_COMMAND_TEXT = "Enter command. Type help to see available commands"

const TerminalScreen = ({ handleToggleGame }) => {
  const [log, setLog] = useState([ENTER_COMMAND_TEXT])

  const cmdWithoutArg = [
    "help",
    "cfp",
    "pwd",
    "clear",
    "ls",
    "register",
	"volunteer",
    "location",
    "dir",
    "date",
    "sponsors",
    "bonus",
    "archives",
    "contact",
    "game",
    "schedule",
    "q",
  ]

  const inputRef = useRef()

  useEffect(() => {
    // only focus on terminal when the terminal is within view
    // to avoid annoying jump
    if (inputRef.current && isInView(inputRef.current)) {
      inputRef.current.focus()
    }
  }, [])

  function handleKeyPress(e) {
    if (e.ctrlKey) {
      if (e.which === 85) {
        e.target.value = ""
      }
      if (e.which === 67) {
        setLog([...log, `$ ${e.target.value.trim()}`])
        e.target.value = ""
      }
      if (e.which === 75) {
        setLog([])
        e.target.value = ""
      }
    }

    // enter is pressed
    if (e.which === 13) {
      const { top, height } = inputRef.current.getBoundingClientRect()
      const theY = window.scrollY + top

      // adjust window scroll
      if (top < 0) {
        // above
        window.scroll(0, theY)
      } else if (theY > window.scrollY + window.innerHeight - height - 26) {
        // below
        window.requestAnimationFrame(function () {
          const { top, height } = inputRef.current.getBoundingClientRect()
          const theY = window.scrollY + top
          window.scroll(0, theY - window.innerHeight + height + 26)
        })
      }

      // handle cmds
      let newLog = [...log]
      let val
      const userInput = e.target.value
      const trimmed = userInput.trim()
      let invalidCmd = false
      if (!trimmed) {
        newLog.push("=>")
        setLog(newLog)
        e.target.value = ""
        return false
      }
      const matched = trimmed.match(/^(\S+)((\s+)(.*))?$/)
      const cmd = matched[1]
      const arg = matched[matched.length - 1]

      const notes = ["🌅☕️", "👋🏼🌏", "🤓🥚🎉", "🔼⏺⏹", "⛺️🤓🤓"]

      if (cmdWithoutArg.indexOf(cmd) > -1) {
        // display error if arguments found
        if (arg) {
          val = `${cmd}: illegal option ${arg}`
        } else {
          if (cmd === "help") {
            // val = ["> register", "> speakers", "> location"]
            val =
              "Available commands: cfp, register, volunteer, location, date, archives"
            // } else if (cmd.match(/^pw(d$|d\s+)/)) {
          } else if (cmd === "pwd") {
            val = "/geekcamp/2021"
          } else if (cmd === "clear") {
            setLog([ENTER_COMMAND_TEXT])
            e.target.value = ""
            return
          } else if (cmd === "cfp") {
			const link = "https://www.papercall.io/geekcampsg2022"
            val = "Call for Proposals at <a href='" + link + "' rel='noopender noreferrer' target='_blank'>" + link + "</a>"
            window.open(link)
          } else if (cmd === "register") {
            val = "Registration is not open yet"
          } else if (cmd === "volunteer") {
			const link = "https://forms.gle/YkAHhJFhc3eBhhe37"
            val = "Volunteer by signing up at <a href='" + link + "' rel='noopender noreferrer' target='_blank'>" + link + "</a>"
            window.open(link)
          } else if (cmd === "location") {
            val = "In-person: <a href=\"https://goo.gl/maps/2TyAFjJJQk1YrSYT8\">SP Digital, 180 Clemenceau Ave, Singapore 239922.</a><br>Online: Discord"
          } else if (cmd === "dir") {
            val = "Bad command or file name"
          } else if (cmd === "ls") {
            val = "These are not the files you are looking for."
          } else if (cmd === "date") {
            val = "Saturday, 29th of October 2022"
          } else if (cmd === "contact") {
            val = "geekcampsingapore at gmail dot com"
          } else if (cmd === "bonus") {
            navigate("#bonus")
          } else if (cmd === "archives") {
            navigate("/past-events")
          } else if (cmd === "game") {
            val = "Starting game..."
            handleToggleGame(true)
          } else if (cmd === "q") {
            val = "Quitting game..."
            handleToggleGame(false)
          } else if (cmd === "schedule") {
            navigate("#schedule")
          }
        }
      } else {
        if (cmd === "print" || cmd === "echo") {
          val = arg || "" // print newline if no args
        } else if (cmd === "speakers") {
          if (arg && arg === "--all") {
            val = "Send in your talks to be a speaker"
          } else {
            val = "Send in your talks to be a speaker (--all)"
          }
        } else if (cmd === "cd") {
          val = "You are already where you are supposed to be."
        } else if (cmd === "mkdir" || cmd === "rm") {
          val = "Permission denied"
        } else if (cmd === "sudo") {
          val = "Your sudo has no power here."
        } else {
          invalidCmd = true
          val = `command not found: ${cmd}`
        }
      }
      if (invalidCmd) {
        newLog.push(`=> ${cmd.split(/\s+/)[0]}`)
      } else {
        newLog.push(`=> ${trimmed}`)
      }
      if (Array.isArray(val)) {
        newLog = newLog.concat(val)
      } else {
        val && newLog.push(val)
      }
      setLog(newLog)
      e.target.value = ""

      // gtm push
      window.dataLayer &&
        window.dataLayer.push({
          input: userInput,
          output: val,
          event: "terminalResponse",
        })
    }
    return false
  }

  function handleClick() {
    console.log(inputRef.current.focus())
  }

  return (
    <Terminal onClick={handleClick}>
      <div className="output">
        {log.map((entry, i) => (
          <code key={i} dangerouslySetInnerHTML={{ __html: entry }} />
        ))}
      </div>
      <code className="promptline">
        <i className="prompt">{`=>`}</i>
        <input
          ref={inputRef}
          onKeyDown={handleKeyPress}
          className="input"
          type="email"
          autoCorrect="off"
          autoCapitalize="none"
        ></input>
      </code>
    </Terminal>
  )
}

function isInView(element) {
  let box = element.getBoundingClientRect()
  return box.top < window.innerHeight && box.bottom >= 0
}

export default TerminalScreen
