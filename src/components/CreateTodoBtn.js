import "../styles/CreateTodoBtn.css";

function CreateTodoBtn(props) {
  return (
    <button className="CreateTodoBtn" onClick={props.onClick}>
      +
    </button>
  );
}

export { CreateTodoBtn };
