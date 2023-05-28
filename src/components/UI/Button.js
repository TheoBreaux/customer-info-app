import React from "react";
import "./Button.css";

const Button = ({ text, ...props}) => {
  const classes = props.className;
  return (
    <div>
      <button className={classes}>
        {text}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
