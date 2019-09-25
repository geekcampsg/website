import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Console from "./console"

const Terminal = styled(Console)`
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
    margin-right: 0.5rem;
    color: var(--green);
  }

  .output a {
    color: var(--green);
    &:hover {
      color: var(--blue);
    }
  }
`

export default () => {
  const [log, setLog] = useState([
    "Enter command. Type help to see available commands",
  ])

  const cmdWithoutArg = [
    "help",
    "pwd",
    "clear",
    "ls",
    "register",
    "location",
    "dir",
    "date",
  ]

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleKeyPress(e) {
    // enter is pressed
    if (e.which === 13) {
      let newLog = [...log]
      let val
      const userInput = e.target.value
      const trimmed = userInput.trim()
      let invalidCmd = false
      if (!trimmed) {
        newLog.push("$")
        setLog(newLog)
        e.target.value = ""
        return false
      }
      const matched = trimmed.match(/^(\S+)((\s+)(.*))?$/)
      const cmd = matched[1]
      const arg = matched[matched.length - 1]

      if (cmdWithoutArg.indexOf(cmd) > -1) {
        // display error if arguments found
        if (arg) {
          val = `${cmd}: illegal option ${arg}`
        } else {
          if (cmd === "help") {
            // val = ["> register", "> speakers", "> location"]
            val = "Available commands: register, speakers, location"
            // } else if (cmd.match(/^pw(d$|d\s+)/)) {
          } else if (cmd === "pwd") {
            val = "/geekcamp/2019"
          } else if (cmd === "clear") {
            setLog([])
            e.target.value = ""
            return
          } else if (cmd === "register") {
            val =
              "Register now at <a href='https://geekcampsg2019.eventbrite.sg' rel='noopener noreferrer' target='_blank'>https://geekcampsg2019.eventbrite.sg</a>"
            window.open("https://geekcampsg2019.eventbrite.sg")
          } else if (cmd === "location") {
            val =
              "<a href='https://goo.gl/maps/f4TMkMJKBrrXtbWd6' rel='noopener noreferrer' target='_blank'>📍 Shaw Foundation Alumni House, NUS. Auditorium Level 2, 11 Kent Ridge Drive, Singapore 119244</a>"
          } else if (cmd === "dir") {
            val = "Bad command or file name"
          } else if (cmd === "ls") {
            val = "These are not the files you are looking for."
          } else if (cmd === "date") {
            val = "Saturday, 19th Oct 2019"
          }
        }
      } else {
        if (cmd === "print" || cmd === "echo") {
          val = arg || "" // print newline if no args
        } else if (cmd === "speakers") {
          if (arg && arg === "--all") {
            val =
              "Chang Sau Sheong, Subhransu Behera, Hazwan Hassan, Michael Cheng, Kenrick, Renaldi Gondosubroto, Yos Riady, Sudharshan, Liu Weiyuan, Dipesh Monga"
          } else {
            val =
              "Chang Sau Sheong, Subhransu Behera, Hazwan Hassan, Michael Cheng, and many more (--all)"
          }
        } else if (cmd === "cd") {
          val = "You are already where you are supposed to be."
        } else if (cmd === "mkdir") {
          val = "Permission denied"
        } else {
          invalidCmd = true
          val = `command not found: ${cmd}`
        }
      }
      if (invalidCmd) {
        newLog.push(`$ ${cmd.split(/\s+/)[0]}`)
      } else {
        newLog.push(`$ ${trimmed}`)
      }
      if (Array.isArray(val)) {
        newLog = newLog.concat(val)
      } else {
        newLog.push(val)
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
      <Console.Code>
        <div className="output">
          {log.map((entry, i) => (
            <code key={i} dangerouslySetInnerHTML={{ __html: entry }} />
          ))}
        </div>
        <code className="promptline">
          <i className="prompt">$</i>
          <input
            ref={inputRef}
            onKeyPress={handleKeyPress}
            className="input"
            type="email"
            autoCorrect="off"
            autoCapitalize="none"
          ></input>
        </code>
      </Console.Code>
    </Terminal>
  )
}
