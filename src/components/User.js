import React from "react";
import Card from "./UI/Card";
import "./User.css";

const User = (props) => {
  return (
    <div>
      {props.userInfo.map((user, index) => (
        <Card className="card" key={index}>
          <div className="user-information">
            {`${user.userName} (${user.userAge} years old)`}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default User;
