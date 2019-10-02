import React, { useRef, useEffect } from "react"
import Console from "./console"

function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

export default function Game() {
  const canvas = useRef()

  useEffect(() => {
    let aliensState = {
      x: [],
      y: [],
    }
    let bulletState = {
      y: [],
      x: [],
    }

    const ctx = canvas.current.getContext("2d")
    ctx.beginPath()
    ctx.fill()
    let animationFrameId = requestAnimationFrame(render)

    const midX = canvas.current.width / 2
    const triLength = 100
    let numSprite = 0
    let numBullets = 0
    let deltaX = 0
    let bulletInitY = canvas.current.height - triLength + 10
    let gameOver = true
    let score = 0
    let lastTime = new Date().getTime()
    let numSeconds = 0

    function createSprite(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 10, 0, 2 * Math.PI)
      ctx.fill()
    }

    function detectHit() {
      for (let i = 0; i < numSprite; i++) {
        for (let j = 0; j < numBullets; j++) {
          if (
            bulletState.y[j] <= aliensState.y[i] + 10 &&
            bulletState.y[j] >= aliensState.y[i] - 10 &&
            bulletState.x[j] <= aliensState.x[i] + 10 &&
            bulletState.x[j] >= aliensState.x[i] - 10
          ) {
            console.log(
              "hit",
              aliensState.x[i],
              aliensState.y[i],
              bulletState.x[j],
              bulletState.y[j]
            )
            aliensState.x.splice(i, 1)
            aliensState.y.splice(i, 1)
            score++
          }
        }
      }
    }
    function faillingSprite(ctx) {
      const rate = getRandom(1, 10 + score)
      //console.log(rate / 60)
      if (rate / 60 <= 0.018) {
        aliensState.x.push(getRandom(10, 490))
        aliensState.y.push(0)
      }
      numSprite = aliensState.x.length
      for (let i = 0; i < numSprite; i++) {
        if (aliensState.y[i] <= canvas.current.height + 10) {
          aliensState.y[i] += 2
        }
        createSprite(aliensState.x[i], aliensState.y[i])
        if (aliensState.y[i] > canvas.current.height) {
          aliensState.y.shift()
          aliensState.x.shift()
        }
      }
    }
    function fireBullet(ctx) {
      for (let i = 0; i < bulletState.y.length; i++) {
        if (bulletState.y[i] <= canvas.current.height) {
          bulletState.y[i] -= 5
        }
        ctx.beginPath()
        ctx.arc(bulletState.x[i], bulletState.y[i], 4, 0, 2 * Math.PI)
        ctx.fill()

        if (bulletState.y[i] <= 0) {
          bulletState.y.shift()
          bulletState.x.shift()
        }
      }
    }

    document.addEventListener("keydown", moveTriangle, false)
    document.addEventListener("keyup", gameState, false)

    function moveTriangle(evt) {
      switch (evt.keyCode) {
        case 16:
          bulletState.y.push(bulletInitY)
          let x = midX + deltaX
          bulletState.x.push(x)
          numBullets = bulletState.x.length
          break
        case 37:
          deltaX -= 20
          break
        case 39:
          deltaX += 20
          break
        default:
          break
      }
    }

    function gameState(evt) {
      switch (evt.keyCode) {
        case 80:
          console.log("start")
          gameOver = false
          break
        default:
          break
      }
    }

    function resetGame() {
      gameOver = true
      score = 0
      numSeconds = 0
    }

    function render() {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
      ctx.fillStyle = "azure"
      ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)

      if (!gameOver) {
        // Elapsed time
        let currentTime = new Date().getTime()
        if (currentTime - lastTime >= 1000) {
          console.log(lastTime, currentTime)
          lastTime = currentTime
          numSeconds++
        }
        // Draw triangle
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.moveTo(midX + deltaX, canvas.current.height - triLength)
        ctx.lineTo(midX - triLength + deltaX, canvas.current.height)
        ctx.lineTo(midX + triLength + deltaX, canvas.current.height)
        ctx.fill()
        fireBullet(ctx)

        // Draw antenna
        faillingSprite(ctx)
        detectHit()

        ctx.fillStyle = "#282a35"
        ctx.font = '16px "PT Mono"'
        ctx.fillText(numSeconds, 20, 70)

        if (numSeconds > 30 && score <= 0) {
          resetGame()
        }

        ctx.restore()
      } else {
        ctx.fillStyle = "#282a35"
        ctx.font = '24px "PT Mono"'
        ctx.fillText("Start game", midX - triLength, 200)
        ctx.font = '20px "PT Mono"'
        ctx.fillText("Press 'p' key to start game", 50, 300)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener("keydown", moveTriangle, false)
      document.removeEventListener("keyup", gameState, false)
    }
  }, [])

  return (
    <Console light>
      <Console.Controls></Console.Controls>
      <canvas ref={canvas} width={600} height={400} />
    </Console>
  )
}
