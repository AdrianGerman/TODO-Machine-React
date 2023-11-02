import { ReactComponent as CheckSVG } from "../img/completev.svg";
import { ReactComponent as DeleteSVG } from "../img/deletex.svg";
import "../styles/TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
