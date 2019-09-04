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
    color: yellow;
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
`

export default () => {
  const [log, setLog] = useState([
    "Enter command. Type help to see available commands",
  ])

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleKeyPress(e) {
    // enter is pressed
    if (e.which === 13) {
      let newLog = [...log]
      const userInput = e.target.value
      const cmd = userInput.trim()
      let val

      if (cmd === "help") {
        // val = ["> register", "> speakers", "> location"]
        val = "Available commands: register, speakers, location"
      } else if (cmd.match(/^pw(d$|d\s+)/)) {
        val = "/geekcamp/2019"
      } else if (cmd.match(/^clea(r$|r\s+)/)) {
        setLog([])
        e.target.value = ""
        return
      } else if (cmd.match(/^l(s$|s\s+)/)) {
        val = "These are not the files you are looking for."
      } else if (cmd.match(/^echo\s*|^print\s*/)) {
        val =
          (cmd.match(/^echo\s*(.*)/) && cmd.match(/^echo\s*(.*)/)[1]) ||
          (cmd.match(/^print\s*(.*)/) && cmd.match(/^print\s*(.*)/)[1])
        val = val || "\n" // print newline if no args
      } else if (cmd.match(/^registe(r$|r\s+)/)) {
        val = "Registration will open soon!"
      } else if (cmd.match(/^location$/)) {
        val = "Location to be announced!"
      } else if (cmd.match(/^speakers$/)) {
        val =
          "Chang Sau Sheong, Subhransu Behera, Muhammad Hazwan, Michael Cheng, and many more"
      } else {
        val = `command not found: ${cmd}`
      }
      newLog.push(`$ ${cmd.split(/\s+/)[0]}`)
      if (Array.isArray(val)) {
        newLog = newLog.concat(val)
      } else {
        newLog.push(val)
      }
      setLog(newLog)
      e.target.value = ""

      // gtm push
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
            <code key={i}>{entry}</code>
          ))}
        </div>
        <code className="promptline">
          <i className="prompt">$</i>
          <input
            ref={inputRef}
            onKeyPress={handleKeyPress}
            className="input"
          ></input>
        </code>
      </Console.Code>
    </Terminal>
  )
}
