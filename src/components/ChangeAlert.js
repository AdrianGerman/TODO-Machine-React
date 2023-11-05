import React from "react";
import { useStorageListener } from "../hooks/useStorageListener";
import "../styles/ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Al parecer se realizaron cambios en otro dispositivo</p>
          <p>¿Quieres sincronizar los cambios?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={() => toggleShow(false)}
          >
            SI!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
