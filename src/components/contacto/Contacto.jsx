/* eslint-disable arrow-body-style */
import React from "react"
import style from "./Contacto.module.css"

const Contacto = () => {
  return (
    <div className={style.defaultContainer}>
      <div className={style.contactoContainer}>
        <img src="./images/svg/linkedIn.svg" alt="phone" />
        <a href="https://acortar.link/6vlQm">LinkedIn</a>
      </div>
      <div className={style.contactoContainer}>
        <img src="./images/svg/mail.svg" alt="phone" />
        <span> castellanosa80@gmail.com </span>
      </div>
      <div className={style.contactoContainer}>
        <img src="./images/svg/person.svg" alt="phone" />
        <span> +502 54182514 </span>
      </div>
      <div className={style.contactoContainer}>
        <img src="./images/svg/github.svg" alt="phone" />
        <a href="https://github.com/angelcast2002">GitHub</a>
      </div>
    </div>
  )
}

export default Contacto
