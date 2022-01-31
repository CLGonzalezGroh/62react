import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoContext"
import "./ToDoCounter.css"

const ToDoCounter = () => {
  const { totalToDos, completedToDos } = useContext(ToDoContext)
  return (
    <h2 className="ToDoCounter">
      Has completado {completedToDos} de {totalToDos} Tareas
    </h2>
  )
}

export default ToDoCounter
