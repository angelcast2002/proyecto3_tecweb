/* eslint-disable arrow-body-style */
import React from "react"
import style from "./Habilidades.module.css"

const Habilidades = () => {
  return (
    <div className={style.defaultContainer}>
      <div className={style.idiomasContainer}>
        <div className={style.imgContainer}>
          <img src="./images/svg/idiomas.svg" alt="Idiomas" />
        </div>
        <div className={style.textContainer}>
          <h1> Idiomas </h1>
          <ul>
            <li> Español: nativo</li>
            <li> Inglés: medio </li>
          </ul>
        </div>
      </div>
      <div className={style.lenguajesContainer}>
        <div className={style.titleContainer}>
          <h1> Lenguajes </h1>
        </div>
        <div className={style.elementoLenguaje}>
          <div className={style.lenguajes}>
            <span> HTML </span>
            <progress className={style.progress} value="75" max="100" />
          </div>
          <div className={style.lenguajes}>
            <span> Python </span>
            <progress className={style.progress} value="75" max="100" />
          </div>
          <div className={style.lenguajes}>
            <span> Kotlin </span>
            <progress className={style.progress} value="50" max="100" />
          </div>
          <div className={style.lenguajes}>
            <span> React </span>
            <progress className={style.progress} value="75" max="100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habilidades
