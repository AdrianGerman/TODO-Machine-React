import React from "react";
import { withStorageListener } from "../hooks/withStorageListener";
import "../styles/ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
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
    return <p>Eto eta vacio</p>;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
