import React from "react"
import useStorageListener from "./useStorageListener"
import { Modal } from "../Modal"
import "./ChangeAlert.css"

const ChangeAlert = ({ synchronizeToDo }) => {
  const { show, toggleShow } = useStorageListener(synchronizeToDo)
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

export { ChangeAlert }
