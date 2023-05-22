import React, { useState } from "react"
// eslint-disable-next-line import/no-unresolved
import { navigate } from "@store"
import { useStoreon } from "storeon/react"
import styles from "./Menu.module.css"
import DropDown from "../../components/dropDown/DropDown"
import InputPill from "../../components/inputPill/InputPill"
import Button from "../../components/button/Button"

const Menu = () => {
  const { dispatch } = useStoreon("gameConfig")
  const [valueDropDown, setValueDropDown] = useState("0")
  const [valueInputPill, setValueInputPill] = useState("0")

  const optionSkins = [
    { value: "0", label: "Human" },
    { value: "1", label: "Cat" },
    { value: "2", label: "Ninja" },
  ]
  const temas = [
    { id: "0", label: "Tema 1" },
    { id: "1", label: "Tema 2" },
    { id: "2", label: "Tema 3" },
  ]

  const handleDropDownValue = (e) => {
    setValueDropDown(e.target.value)
  }

  const handleSelectInputPill = (e) => {
    setValueInputPill(e)
  }

  const handleClick = () => {
    dispatch("gameConfig/set", {
      skin: valueDropDown,
      tema: valueInputPill,
    })
    navigate("/game")
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.opcionesContainer}>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione la skin del jugador</span>
          <DropDown opciones={optionSkins} value={valueDropDown} onChange={handleDropDownValue} />
        </div>
        <div className={styles.subOpcionContainer}>
          <span>Seleccione el tema del laberinto</span>
          <InputPill opciones={temas} value={valueInputPill} onSelect={handleSelectInputPill} />
        </div>
        <div className={styles.subOpcionContainer}>
          <Button label="Jugar" backgroundColor="#fff" size="large" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Menu
