import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoContext"
import "./CreateToDoButton.css"

const CreateToDoButton = () => {
  const { setShowToDoModal } = useContext(ToDoContext)

  const addToDoButton = () => {
    setShowToDoModal((prevState) => !prevState)
  }
  return (
    <button className="CreateToDoButton" onClick={addToDoButton}>
      +
    </button>
  )
}

export default CreateToDoButton
