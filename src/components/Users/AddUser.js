import React, { useState } from "react";
import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const errorMessages = {
    message1: "Please enter a  valid name and age (non-empty values).",
    message2: "Please enter a valid age (> 0.)",
    message3: "Invalid Input",
    message4: "Invalid Age",
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    if (userName === "" || userAge === "") {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(errorMessages.message1);
      props.setModalTitle(errorMessages.message3);
    } else if (+userAge < 1) {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(errorMessages.message2);
      props.setModalTitle(errorMessages.message4);
    } else if (userName !== "" && userAge !== "") {
      const newUser = {
        userName: userName,
        userAge: userAge,
        id: Math.random().toString(),
      };
      props.setUsers((prevUsers) => [...prevUsers, newUser]);
      props.setUserAdded(true);
    }
    event.preventDefault();
    setUserName("");
    setUserAge("");
  };

  return (
    <Card className="user-entry">
      <form className="user-entry-form" onSubmit={addUserHandler}>
        <div className="user-inputs">
          <label htmlFor="username">Username</label>
          <input
            onChange={userNameChangeHandler}
            type="text"
            id="username"
            value={userName}
            name="username"
          />
        </div>
        <div className="user-inputs">
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            type="number"
            value={userAge}
            name="age"
            id="age"
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
