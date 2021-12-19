import React, { useState } from "react";
import { useEffect } from "react";

export const JWT_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
  SESSION_STORAGE: () => window.sessionStorage.getItem("jwt"),
};

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(JWT_STATES.NOT_KNOWN);
console.log({jwt})
  useEffect(() => {
    console.log('token', JWT_STATES.SESSION_STORAGE())
    setJWT(JWT_STATES.SESSION_STORAGE);
  }, []);

  return (
    <Context.Provider value={{ jwt, setJWT }}>
      {jwt === JWT_STATES.NOT_KNOWN ? "cargando..." : children}
    </Context.Provider>
  );
}

export default Context;
