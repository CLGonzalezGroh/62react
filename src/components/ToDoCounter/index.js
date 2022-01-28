import "./ToDoCounter.css"

const ToDoCounter = ({ total, completed }) => {
  return (
    <h2 className="ToDoCounter">
      Has completado {completed} de {total} Tareas
    </h2>
  )
}

export default ToDoCounter
