import React, { useState } from "react";
import "./UserInput.css";
import Button from "./UI/Button";
import Card from "./Card";

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);

  const userNameChangeHandler = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    console.log(event.target.value);
    setUserAge(event.target.value);
  };

  const userFormSubmitHandler = () => {};

  const addUserInfoClickHandler = () => {};

  return (
    <Card className="user-entry">
      <form className="user-entry-form">
        <div className="user-inputs">
          <label htmlFor="username">Username</label>
          <input
            onChange={userNameChangeHandler}
            type="text"
            id="username"
            name="username"></input>
        </div>
        <div className="user-inputs">
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            name="age"
            id="age"></input>
        </div>
        <Button
          onClick={addUserInfoClickHandler}
          type="submit"
          text="Add User"
        />
      </form>
    </Card>
  );
};

export default UserInput;
