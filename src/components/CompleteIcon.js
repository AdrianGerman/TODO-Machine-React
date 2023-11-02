import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "black"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
