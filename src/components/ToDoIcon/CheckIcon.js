import ToDoIcon from "./"

const CheckIcon = ({ completed, onComplete }) => {
  return (
    <ToDoIcon
      type="check"
      color={completed ? "#4caf40" : "gray"}
      onClick={onComplete}
    />
  )
}

export default CheckIcon
