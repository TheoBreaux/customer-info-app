import React from "react";
import Card from "./Card";
import "./User.css";

const User = (props) => {
  return (
    <Card className="card">
      {props.userInfo.map((user) => (
        <div className="user-information">{`${user.userName} (${user.userAge} years old)`}</div>
      ))}
    </Card>
  );
};

export default User;
