import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();
const SubContext = createContext();
const AllSubs = createContext();

// Create the UserContextProvider component
const UserContextProvider = ({ children }) => {
  const [userContext, setUserContext] = useState("");
  const [userHasSubscriptions, setUserHasSubscriptions] = useState(false);
  const [allSubs, setAllSubs] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userContext,
        setUserContext,
      }}
    >
      <SubContext.Provider
        value={{
          userHasSubscriptions,
          setUserHasSubscriptions,
        }}
      >
        <AllSubs.Provider
          value={{
            allSubs,
            setAllSubs,
          }}
        >
          {children}
        </AllSubs.Provider>
      </SubContext.Provider>
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext, SubContext, AllSubs };
