import "./ToDoIcon.css"
import { ReactComponent as CheckSVG } from "./done_black_24dp.svg"
import { ReactComponent as DeleteSVG } from "./delete_black_24dp.svg"

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
}

const ToDoIcon = ({ type, color = "gray", onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export default ToDoIcon
