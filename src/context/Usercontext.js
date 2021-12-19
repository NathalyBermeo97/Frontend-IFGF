import React, { useState } from "react";
import { useEffect } from "react";

export const JWT_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
  STORAGE_JWT: () => window.localStorage.getItem("jwt"),
};

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(JWT_STATES.NOT_KNOWN);

  useEffect(() => {
    setJWT(JWT_STATES.STORAGE_JWT);
  }, []);

  return (
    <Context.Provider value={{ jwt, setJWT }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
