import React, { useRef } from "react";
import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorMessages = {
    message1: "Please enter a  valid name and age (non-empty values).",
    message2: "Please enter a valid age (> 0.)",
    message3: "Invalid Input",
    message4: "Invalid Age",
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName === "" || enteredAge === "") {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(errorMessages.message1);
      props.setModalTitle(errorMessages.message3);
    } else if (+enteredAge < 1) {
      props.setInvalidModalDisplay(true);
      props.setModalMessage(errorMessages.message2);
      props.setModalTitle(errorMessages.message4);
    } else if (enteredName !== "" && enteredAge !== "") {
      const newUser = {
        userName: enteredName,
        userAge: enteredAge,
        id: Math.random().toString(),
      };
      props.setUsers((prevUsers) => [...prevUsers, newUser]);
      props.setUserAdded(true);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      <Card className="user-entry">
        <form className="user-entry-form" onSubmit={addUserHandler}>
          <div className="user-inputs">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              ref={nameInputRef}
            />
          </div>
          <div className="user-inputs">
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" name="age" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
