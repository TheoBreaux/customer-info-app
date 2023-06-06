import React, { useState, useRef } from "react";
import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const formRef = useRef(null);

  const message1 = "Please enter a  valid name and age (non-empty values).";
  const message2 = "Please enter a valid age (> 0.)";

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName === "" && userAge === "") {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(message1);
    } else if (userAge < 0) {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(message2);
    } else if (userName !== "" && userAge !== "") {
      const newUser = { userName: userName, userAge: userAge };
      props.setUserInfo((prevUsers) => [...prevUsers, newUser]);
      formRef.current.reset();
      props.setUserAdded(true);
    }
  };

  return (
    <Card className="user-entry">
      <form className="user-entry-form" onSubmit={addUserHandler} ref={formRef}>
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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
