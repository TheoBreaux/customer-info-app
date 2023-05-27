import React from "react";
import UserInput from "./components/UserInput";
import InvalidInputModal from "./components/InvalidInputModal";

const App = () => {
  return (
    <div>
      <UserInput />
      <InvalidInputModal />
    </div>
  );
};

export default App;
