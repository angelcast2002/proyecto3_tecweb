/* eslint-disable arrow-body-style */
import React from "react"
import style from "./Experiencia.module.css"

const Educacion = () => {
  return (
    <div className={style.defaultContainer}>
      <div className={style.educacionElementContainer}>
        <h1> Tutor universitario </h1>
        <p> Universidad del Valle de Guatemala </p>
        <p> 2022 - 2023 </p>
        <div className={style.experienciaContainer}>
          <p> Ecuaciones diferenciales I </p>
          <p> Pensamiento cuantitativo </p>
          <p> Programación orientada a objetos JAVA (POO) </p>
        </div>
      </div>
    </div>
  )
}

export default Educacion
