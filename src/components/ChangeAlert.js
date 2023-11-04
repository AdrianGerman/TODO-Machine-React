import React from "react";
import { withStorageListener } from "../hooks/withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return <p>Hubo cambios padrino</p>;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
