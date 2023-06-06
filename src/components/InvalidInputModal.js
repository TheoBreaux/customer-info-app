import React from "react";
import "./InvalidInputModal.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const InvalidInputModal = (props) => {
  const handler = () => {
    props.setInvalidModalDisplay(false);
  };

  return (
    <Card className="modal">
      <div className="modal-header">
        <p className="invalid">Invalid Input</p>
      </div>
      <div>
        <p className="modal-text-output">{props.modalMessage}</p>
        <Button className="exit-modal-btn" onClick={handler}>
          Okay
        </Button>
      </div>
    </Card>
  );
};

export default InvalidInputModal;

// Please enter a  valid name and age (non-empty values).
// Please enter a valid age (> 0.)
