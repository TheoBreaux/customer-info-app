import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/UI/ErrorModal";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [invalidModalDisplay, setInvalidModalDisplay] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  return (
    <Fragment>
      <AddUser
        setUsers={setUsers}
        setUserAdded={setUserAdded}
        setInvalidModalDisplay={setInvalidModalDisplay}
        setModalMessage={setModalMessage}
        modalMessage={modalMessage}
        setModalTitle={setModalTitle}
      />
      {userAdded && <UsersList users={users} />}
      {invalidModalDisplay && (
        <ErrorModal
          invalidModalDisplay={invalidModalDisplay}
          setInvalidModalDisplay={setInvalidModalDisplay}
          modalMessage={modalMessage}
          modalTitle={modalTitle}
        />
      )}
    </Fragment>
  );
};

export default App;
