import React from "react";
import "./InvalidInputModal.css";
import Card from "./Card";
import Button from "./UI/Button";

const InvalidInputModal = ({ text, ...props }) => {
  return (
    <Card className="modal">
      <div className="modal-header">
        <p className="invalid">Invalid Input</p>
      </div>
      <div>
        <p className="valid">{}</p>
        <Button text="Okay" className="exit-modal-btn" />
      </div>
    </Card>
  );
};

export default InvalidInputModal;

// Please enter a  valid name and age (non-empty values).
// Please enter a valid age (> 0.)
