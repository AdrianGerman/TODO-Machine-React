import React from "react";
import { withStorageListener } from "../hooks/withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios en las tareas</p>
        <button onClick={() => toggleShow(false)}>Recargar</button>
      </div>
    );
  } else {
    return <p>Eto eta vacio</p>;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
