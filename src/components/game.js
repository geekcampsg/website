import React, { useRef, useEffect } from "react"
import Console from "./console"
import gameSprite from '../../static/images/game/geekcamp_sprite.png'
import gameTent from '../../static/images/game/geekcamp_tent.png'

function getRandom (min, max) {
  return Math.random() * (max - min) + min
}

export default function Game () {
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

    let imagesLoaded = [false, false]
    const geekcampTent = new Image()
    geekcampTent.src = gameTent
    geekcampTent.onload = function () {
      imagesLoaded[0] = true
    }
    const geekcampSprite = new Image()
    geekcampSprite.src = gameSprite
    geekcampSprite.onload = function () {
      imagesLoaded[1] = true
    }

    const ctx = canvas.current.getContext("2d")
    const dpr = window.devicePixelRatio || 1
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

    function createSprite (x, y) {
      if (imagesLoaded[1]) {
        ctx.drawImage(geekcampSprite, x, y)
      } else {
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, 2 * Math.PI)
        ctx.fill()
      }
    }

    function detectHit () {
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
    function faillingSprite (ctx) {
      const rate = getRandom(1, 10)
      const limit = ((18 + score / 100) / 1000)
      //console.log(rate / 60, ((18 + score / 100) / 1000))
      if (rate / 60 <= limit) {
        aliensState.x.push(getRandom(100, 490))
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
    function fireBullet (ctx) {
      for (let i = 0; i < bulletState.y.length; i++) {
        if (bulletState.y[i] <= canvas.current.height) {
          bulletState.y[i] -= 5
        }
        ctx.fillStyle = "#868686"
        ctx.beginPath()
        ctx.arc(bulletState.x[i], bulletState.y[i], 2, 0, 2 * Math.PI)
        ctx.fill()

        if (bulletState.y[i] <= 0) {
          bulletState.y.shift()
          bulletState.x.shift()
        }
      }
    }

    document.addEventListener("keydown", moveTriangle, false)
    document.addEventListener("keyup", gameState, false)

    function moveTriangle (evt) {
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

    function gameState (evt) {
      switch (evt.keyCode) {
        case 80:
          console.log("start")
          gameOver = false
          break
        default:
          break
      }
    }

    function resetGame () {
      gameOver = true
      score = 0
      numSeconds = 0
    }

    function render () {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
      ctx.fillStyle = "#F8F8F8"
      ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)

      if (!gameOver) {
        // Elapsed time
        let currentTime = new Date().getTime()
        if (currentTime - lastTime >= 1000) {
          lastTime = currentTime
          numSeconds++
        }
        // Draw tank shooter
        if (imagesLoaded[0]) {
          ctx.drawImage(geekcampTent, midX - triLength + deltaX, canvas.current.height - 172)
        } else {
          ctx.fillStyle = "black"
          ctx.beginPath()
          ctx.moveTo(midX + deltaX, canvas.current.height - triLength)
          ctx.lineTo(midX - triLength + deltaX, canvas.current.height)
          ctx.lineTo(midX + triLength + deltaX, canvas.current.height)
          ctx.fill()
        }

        fireBullet(ctx)

        // Draw antenna
        faillingSprite(ctx)
        detectHit()

        ctx.fillStyle = "#282a35"
        ctx.font = '16px "PT Mono"'
        ctx.fillText("Time: " + numSeconds + "s", 20, 70)
        ctx.fillText("Score: " + score, 20, 90)

        //console.log('score relation', score / numSeconds)
        let scoreRelation = score / numSeconds
        if ((numSeconds > 30 && score <= 0) || (scoreRelation < 0.05 && scoreRelation > 0)) {
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
      <canvas ref={canvas} width={848} height={400} />
    </Console>
  )
}
