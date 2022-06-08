import React from "react";

const UserDataContext = React.createContext({
  name: "",
  setName: () => {},
});

export default UserDataContext;
