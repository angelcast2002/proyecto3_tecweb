import React, { useEffect, useState, useRef } from "react"
import { useStoreon } from "storeon/react"
// eslint-disable-next-line import/no-unresolved
import PropTypes from "prop-types"
import style from "./Maze.module.css"
import Button from "../button/Button"
import SobreMi from "../sobreMi/SobreMi"
import Habilidades from "../habilidades/Habilidades"
import Educacion from "../educacion/Educacion"
import Experiencia from "../experienciaLaboral/Experiencia"
import Contacto from "../contacto/Contacto"

import Pared from "../Pared/Pared"
import Player from "../Player/Player"

const Maze = ({ json, w, h }) => {
  const { gameConfig } = useStoreon("gameConfig")
  const skins = {
    0: [
      "images/resources/skin1/playerUp.png",
      "images/resources/skin1/playerRight.png",
      "images/resources/skin1/playerDown.png",
      "images/resources/skin1/playerLeft.png",
    ],
    1: [
      "images/resources/skin2/playerUp.png",
      "images/resources/skin2/playerRight.png",
      "images/resources/skin2/playerDown.png",
      "images/resources/skin2/playerLeft.png",
    ],
    2: [
      "images/resources/skin3/playerUp.png",
      "images/resources/skin3/playerRight.png",
      "images/resources/skin3/playerDown.png",
      "images/resources/skin3/playerLeft.png",
    ],
  }
  const temas = {
    0: ["images/resources/tema1/vWall.png", "images/resources/tema1/hWall.png", "images/resources/tema1/corner.png"],
    1: ["images/resources/tema2/vWall.png", "images/resources/tema2/hWall.png", "images/resources/tema2/corner.png"],
    2: ["images/resources/tema3/vWall.png", "images/resources/tema3/hWall.png", "images/resources/tema3/corner.png"],
  }
  const [maze, setMaze] = useState(json)
  const [sprite, setSprite] = useState(skins[parseInt(gameConfig.skin, 10)][1])
  const [win, setWin] = useState(false)
  const [showInfo, setShowInfo] = useState("sobreMi")
  const interval = useRef(null)
  const keyListener = useRef(null)
  const [tooltip, setTooltip] = useState(false)

  const movePlayer = (dx, dy) => {
    setMaze((oldMaze) => {
      const newMaze = [...oldMaze]

      let [x, y] = [null, null]
      let i = 0
      while (i < oldMaze.length) {
        const index = oldMaze[i].indexOf("p")
        if (index !== -1) {
          x = index
          y = i
          break
        }
        i += 1
      }
      if (
        (x + dx === 1 && y + dy === 1)
        || (x + dx === 2 && y + dy === 1)
        || (x + dx === 1 && y + dy === 2)
        || (x + dx === 2 && y + dy === 2)
      ) {
        setShowInfo("sobreMi")
      } else if (
        (x + dx === 1 && y + dy === 19)
        || (x + dx === 2 && y + dy === 19)
        || (x + dx === 2 && y + dy === 18)
        || (x + dx === 1 && y + dy === 18)
      ) {
        setShowInfo("educacion")
      } else if (
        (x + dx === 16 && y + dy === 11)
        || (x + dx === 17 && y + dy === 11)
        || (x + dx === 16 && y + dy === 10)
        || (x + dx === 17 && y + dy === 10)
        || (x + dx === 16 && y + dy === 12)
        || (x + dx === 17 && y + dy === 12)
      ) {
        setShowInfo("habilidades")
      } else if (
        (x + dx === 27 && y + dy === 1)
        || (x + dx === 28 && y + dy === 1)
        || (x + dx === 29 && y + dy === 1)
      ) {
        setShowInfo("experiencia")
      } else {
        setShowInfo("contacto")
      }

      if (newMaze[y + dy][x + dx] === " ") {
        newMaze[y][x] = " "
        newMaze[y + dy][x + dx] = "p"
      }

      if (newMaze[y + dy][x + dx] === "g") {
        clearInterval(interval.current)
        setWin(true)
      }
      return newMaze
    })
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (tooltip === false) {
            setTooltip(true)
          }
          setSprite(skins[gameConfig.skin][0])
          movePlayer(0, -1)
          break
        case "ArrowDown":
          if (tooltip === false) {
            setTooltip(true)
          }
          setSprite(skins[gameConfig.skin][2])
          movePlayer(0, 1)
          break
        case "ArrowLeft":
          if (tooltip === false) {
            setTooltip(true)
          }
          setSprite(skins[gameConfig.skin][3])
          movePlayer(-1, 0)
          break
        case "ArrowRight":
          if (tooltip === false) {
            setTooltip(true)
          }
          setSprite(skins[gameConfig.skin][1])
          movePlayer(1, 0)
          break
        default:
      }
    }
    if (keyListener.current === null) {
      keyListener.current = handleKeyDown
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      if (keyListener.current !== null) {
        document.removeEventListener("keydown", keyListener.current)
        keyListener.current = null
      }
    }
  }, [])

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <div className={style.generalMazeContainer}>
      {!tooltip ? (
        <div className={style.tooltipContainer}>
          <h1>Utiliza las flechas para moverte hacia las zonas con grama</h1>
        </div>
      ) : null}
      <div className={style.infoContainer}>
        {(() => {
          switch (showInfo) {
            case "sobreMi":
              return <SobreMi />
            case "habilidades":
              return <Habilidades />
            case "educacion":
              return <Educacion />
            case "experiencia":
              return <Experiencia />
            case "contacto":
              return <Contacto />
            default:
              return null
          }
        })()}
      </div>
      {!win ? (
        <div
          className={style.maze}
          style={{
            gridTemplateColumns: `repeat(${w * 2 + w + 1}, 25px)`,
            gridTemplateRows: `repeat(${h + h + 1}, 25px)`,
            width: `${(w * 2 + w + 1) * 25}px`,
            height: `${(h + h + 1) * 25}px`,
          }}
        >
          {maze.map((row, ri) => row.map((col, ci) => {
            const key = `${ri}-${ci}`
            switch (col) {
              case "p":
                return <Player key={key} skin={sprite} />
              case "g":
                return <Pared key={key} skin="/images/resources/win.png" orientation={0} />
              case "-":
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][0]} orientation={0} />
              case "|":
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][1]} orientation={0} />
              case "+":
                return <Pared key={key} skin={temas[parseInt(gameConfig.tema, 10)][2]} orientation={0} />
              case " ":
                if (
                  (ci === 1 && ri === 1)
                    || (ci === 2 && ri === 1)
                    || (ci === 1 && ri === 2)
                    || (ci === 2 && ri === 2)
                ) {
                  return <Pared key={key} skin="images/resources/infoPoint.png" orientation={0} />
                }
                if (
                  (ci === 1 && ri === 19)
                    || (ci === 2 && ri === 19)
                    || (ci === 2 && ri === 18)
                    || (ci === 1 && ri === 18)
                ) {
                  return <Pared key={key} skin="images/resources/infoPoint.png" orientation={0} />
                }
                if (
                  (ci === 16 && ri === 11)
                    || (ci === 17 && ri === 11)
                    || (ci === 16 && ri === 10)
                    || (ci === 17 && ri === 10)
                    || (ci === 16 && ri === 12)
                    || (ci === 17 && ri === 12)
                ) {
                  return <Pared key={key} skin="images/resources/infoPoint.png" orientation={0} />
                }
                if ((ci === 27 && ri === 1) || (ci === 28 && ri === 1) || (ci === 29 && ri === 1)) {
                  return <Pared key={key} skin="images/resources/infoPoint.png" orientation={0} />
                }
                return <Pared key={key} skin="images/resources/way.png" orientation={0} />

              default:
                return null
            }
          }))}
        </div>
      ) : (
        <div className={style.menuContainer}>
          <div className={style.subOpcionContainer}>
            <h1>Contáctame</h1>
            <Button label="Volver a jugar" backgroundColor="#fff" size="large" onClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Maze
