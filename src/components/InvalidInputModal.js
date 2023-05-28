import React from "react";
import "./InvalidInputModal.css";
import Card from "./Card";
import Button from "./UI/Button";

const InvalidInputModal = () => {
  return (
    <Card className="card">
      <div className="modal-top">Invalid Input</div>
      <p>Please enter a valid name and age (non-empty values).</p>
      <Button />
    </Card>
  );
};

export default InvalidInputModal;
