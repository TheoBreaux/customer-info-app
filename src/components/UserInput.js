import React from "react";
import "./UserInput.css";
import Button from "./UI/Button";
import Card from "./Card";

const UserInput = () => {
  return (
    <Card>
      <form className="user-entry-form">
        <div className="user-inputs">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"></input>
        </div>
        <div className="user-inputs">
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" id="age"></input>
        </div>
        <Button />
      </form>
    </Card>
  );
};

export default UserInput;
