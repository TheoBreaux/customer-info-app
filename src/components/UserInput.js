import React, { useState, useRef } from "react";
import "./UserInput.css";
import Button from "./UI/Button";
import Card from "./Card";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const formRef = useRef(null);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const userFormSubmitHandler = (event) => {
    const newUser = { userName: userName, userAge: userAge };
    event.preventDefault();
    props.setUserInfo((prevUsers) => [...prevUsers, newUser]);
    formRef.current.reset();
    props.setUserAdded(true);
  };

  return (
    <Card className="user-entry">
      <form
        className="user-entry-form"
        onSubmit={userFormSubmitHandler}
        ref={formRef}>
        <div className="user-inputs">
          <label htmlFor="username">Username</label>
          <input
            onChange={userNameChangeHandler}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="user-inputs">
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            name="age"
            id="age"
          />
        </div>
        <Button type="submit" text="Add User" />
      </form>
    </Card>
  );
};

export default UserInput;
