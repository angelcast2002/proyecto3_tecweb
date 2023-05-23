/* eslint-disable arrow-body-style */
import React from "react"
import style from "./Educacion.module.css"

const Educacion = () => {
  return (
    <div className={style.defaultContainer}>
      <div className={style.educacionElementContainer}>
        <h1> Educacion Básica </h1>
        <p> Colegio San José de los Infantes </p>
        <p> 2017 - 2019 </p>
        <p> Promedio: 99.00 pts </p>
      </div>
      <div className={style.educacionElementContainer}>
        <h1> Bach. en Cc. y Let. </h1>
        <p> Colegio San José de los Infantes </p>
        <p> 2019 - 2020 </p>
        <p> Promedio: 99.00 pts </p>
      </div>
      <div className={style.educacionElementContainer}>
        <h1> Ing. en Sistemas </h1>
        <p> Universidad del Valle de Guatemala </p>
        <p> 2021 - Actualidad - 5to Semestre </p>
        <p> Promedio: 94.50 pts </p>
      </div>
    </div>
  )
}

export default Educacion
