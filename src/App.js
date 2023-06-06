import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import User from "./components/User";
import InvalidInputModal from "./components/InvalidInputModal";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [invalidModalDisplay, setInvalidModalDisplay] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  return (
    <div>
      <AddUser
        setUserInfo={setUserInfo}
        setUserAdded={setUserAdded}
        setInvalidModalDisplay={setInvalidModalDisplay}
        setModalMessage={setModalMessage}
        modalMessage={modalMessage}
      />
      {userAdded && <User userInfo={userInfo} />}
      {invalidModalDisplay && (
        <InvalidInputModal
          invalidModalDisplay={invalidModalDisplay}
          setInvalidModalDisplay={setInvalidModalDisplay}
          modalMessage={modalMessage}
        />
      )}
    </div>
  );
};

export default App;
