import "./CreateToDoButton.css"

const CreateToDoButton = () => {
  const addTaskButton = () => console.log("click")
  return (
    <button className="CreateToDoButton" onClick={addTaskButton}>
      +
    </button>
  )
}

export default CreateToDoButton
