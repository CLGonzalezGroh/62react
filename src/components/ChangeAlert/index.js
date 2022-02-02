import React from "react"
import withStorageListener from "./withStorageListener"
import { Modal } from "../Modal"
import "./ChangeAlert.css"

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <Modal>
        <div className="container" onSubmit={(e) => e.preventDefault()}>
          <p className="message">Hubo un cambios</p>
          <button className="refresh-button" type="text" onClick={toggleShow}>
            Volver a cargar
          </button>
        </div>
      </Modal>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
