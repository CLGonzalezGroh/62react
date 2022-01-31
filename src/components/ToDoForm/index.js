import { useContext, useState } from "react"
import { ToDoContext } from "../../context/ToDoContext"
import "./ToDoForm.css"

const ToDoForm = () => {
  const { addToDo, setShowToDoModal } = useContext(ToDoContext)
  const [newToDoValue, setNewToDoValue] = useState("")

  const onChange = (e) => {
    setNewToDoValue(e.target.value)
  }
  const onCancel = () => {
    setShowToDoModal(false)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addToDo(newToDoValue)
    setShowToDoModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa la nueva Tarea</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Escribe aquí..."
      />
      <div className="ToDoForm-buttonContainer">
        <button
          type="button"
          className="ToDoForm-button ToDoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="ToDoForm-button ToDoForm-button-add" type="submit">
          Guardar
        </button>
      </div>
    </form>
  )
}

export default ToDoForm
