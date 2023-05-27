import React from "react";
import "./UserInput.css";

const UserInput = () => {
  return (
    <div>
      <form className="user-entry-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username"></input>

        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" id="age"></input>
      </form>
    </div>
  );
};

export default UserInput;
