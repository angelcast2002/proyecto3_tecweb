/* eslint-disable arrow-body-style */
import React from "react"
import style from "./SobreMi.module.css"

const SobreMi = () => {
  return (
    <div className={style.defaultContainer}>
      <div className={style.imgContainer}>
        <img src="images/resources/pf.jpg" alt="Angel Castellanos" />
      </div>
      <div className={style.textContainer}>
        <h1> Angel Castellanos </h1>
        <p>
          {" "}
          Ser un desarrollador destacado y exitoso, que día con día, se desafíe a sí mismo a ser mejor, con el fin de
          desarrollar mis conocimientos actuales y de adquirir nuevos, para así poder mejorar no solo mi futuro sino
          también el de mi país.
          {" "}
        </p>
      </div>
    </div>
  )
}

export default SobreMi
