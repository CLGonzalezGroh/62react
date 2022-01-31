import CheckIcon from "../ToDoIcon/CheckIcon"
import DeleteIcon from "../ToDoIcon/DeleteIcon"
import "./ToDoItem.css"

const ToDoItem = ({ text, completed, toggleToDo, deleteToDo }) => {
  return (
    <li className="ToDoItem">
      <CheckIcon completed={completed} onComplete={toggleToDo} />
      <p className={`ToDoItem-p ${completed && "ToDoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={deleteToDo} />
    </li>
  )
}

export default ToDoItem
