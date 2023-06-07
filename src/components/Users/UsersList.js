import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="card">
      <ul>
        {props.users.map((user) => (
          <li className="user-information" key={user.id}>
            {user.userName} ({user.userAge} years old)
          </li>
          //   <Card className="card" key={index}>
          //     <div className="user-information">
          //       {`${user.userName} (${user.userAge} years old)`}
          //     </div>
          //   </Card>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
