import React from "react";
import Card from "./Card";
import "./User.css";

const User = (props) => {
  return (
    <Card className="card">
      <div className="user-information">Max (31 years old)</div>
    </Card>
  );
};

export default User;
