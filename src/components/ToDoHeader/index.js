import { Children, cloneElement } from "react"
const ToDoHeader = ({ children, loading }) => {
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  )
}

export default ToDoHeader
