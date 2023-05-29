import React, { useState } from "react";
import UserInput from "./components/UserInput";
import User from "./components/User";
import InvalidInputModal from "./components/InvalidInputModal";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userAdded, setUserAdded] = useState(false);

  console.log(userInfo);
  

  return (
    <div>
      <UserInput setUserInfo={setUserInfo} setUserAdded={setUserAdded} />
      {userAdded && <User userInfo={userInfo} />}
      {/* <InvalidInputModal /> */}
    </div>
  );
};

export default App;
