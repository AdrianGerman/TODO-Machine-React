import { TodoIcon } from "./TodoIcon";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="black" onClick={onDelete} />;
}

export { DeleteIcon };
