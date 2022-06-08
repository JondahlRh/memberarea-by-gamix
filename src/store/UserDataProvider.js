import { useState } from "react";
import UserDataContext from "./user-data-context";

const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({ name: "-" });

  const editHandler = (item) => {
    setUserData(item);
  };

  const userDataContext = {
    name: userData.name,
    edit: editHandler,
  };

  return (
    <UserDataContext.Provider value={userDataContext}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
