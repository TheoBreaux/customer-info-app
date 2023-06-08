import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  const errorModalDisplayhandler = () => {
    props.setInvalidModalDisplay(false);
  };

  const Backdrop = (props) => {
    return <div className="backdrop" onClick={errorModalDisplayhandler} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className="modal">
        <div className="modal-header">
          <h2 className="invalid">{props.modalTitle}</h2>
        </div>
        <div>
          <p className="modal-text-output">{props.modalMessage}</p>
          <Button className="exit-modal-btn" onClick={errorModalDisplayhandler}>
            Okay
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={errorModalDisplayhandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalTitle={props.modalTitle}
          modalMessage={props.modalMessage}
          onClick={errorModalDisplayhandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
