import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  const errorModalDisplayhandler = () => {
    props.setInvalidModalDisplay(false);
  };

  return (
    <div>
      <div className="backdrop" onClick={errorModalDisplayhandler}>
        <Card className="modal">
          <div className="modal-header">
            <h2 className="invalid">{props.modalTitle}</h2>
          </div>
          <div>
            <p className="modal-text-output">{props.modalMessage}</p>
            <Button
              className="exit-modal-btn"
              onClick={errorModalDisplayhandler}>
              Okay
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
