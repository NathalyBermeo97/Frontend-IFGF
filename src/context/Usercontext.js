import React, { useState } from "react";

export const JWT_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(JWT_STATES.NOT_KNOWN);

  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
