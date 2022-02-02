import "./CreateToDoButton.css"

const CreateToDoButton = ({ setShowToDoModal }) => {
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
