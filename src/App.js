import React, { useState } from "react";
import UserInput from "./components/UserInput";
import User from "./components/User";
import InvalidInputModal from "./components/InvalidInputModal";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [invalidModal, setInvalidModal] = useState(false);

  return (
    <div>
      <UserInput
        setUserInfo={setUserInfo}
        setUserAdded={setUserAdded}
        setInvalidModal={setInvalidModal}
      />
      {userAdded && <User userInfo={userInfo} />}
      {invalidModal && <InvalidInputModal invalidModal={invalidModal} />}
    </div>
  );
};

export default App;
