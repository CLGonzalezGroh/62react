import "./ToDoCounter.css"

const ToDoCounter = ({ totalToDos, completedToDos, loading }) => {
  return (
    <h2 className={`ToDoCounter ${loading && "ToDoCounter--loading"}`}>
      Has completado {completedToDos} de {totalToDos} Tareas
    </h2>
  )
}

export default ToDoCounter
