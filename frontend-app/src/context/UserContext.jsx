import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create the UserContextProvider component
const UserContextProvider = ({ children }) => {
  const [userContext, setUserContext] = useState("");

  return (
    <UserContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
