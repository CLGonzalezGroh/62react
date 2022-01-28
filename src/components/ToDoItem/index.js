import "./ToDoItem.css"

const ToDoItem = ({ text, completed, toggleToDo, deleteToDo }) => {
  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={toggleToDo}
      >
        ✔
      </span>
      <p className={`ToDoItem-p ${completed && "ToDoItem-p--complete"}`}>
        {text}
      </p>
      <span className={`Icon Icon-delete`} onClick={deleteToDo}>
        X
      </span>
    </li>
  )
}

export default ToDoItem
