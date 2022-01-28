import "./ToDoList.css"

const ToDoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  )
}

export default ToDoList
