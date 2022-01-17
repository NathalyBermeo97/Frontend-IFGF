import React, { useContext, useState } from "react";
import { useEffect } from "react";
import api from "../api/api";
import User from "../api/user";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};
const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [role, setRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(USER_STATES.NOT_KNOWN);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [users, setUsers] = useState();

  console.log({ currentUser, users });
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await User.getUsers();
        setUsers(users);
      } catch (e) {
        console.log("something went wrong", e);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      const jwt = window.localStorage.getItem("jwt");
      const role = window.localStorage.getItem("role");
      setRole(role);
      if (jwt) {
        try {
          const user = await User.getAuthenticatedUser();
          setCurrentUser(user);
        } catch (e) {
          console.log("Something went wrong", e);
          window.localStorage.removeItem("jwt");
          window.localStorage.removeItem("role");
          setCurrentUser(USER_STATES.NOT_LOGGED);
        }
      } else {
        setCurrentUser(USER_STATES.NOT_LOGGED);
      }
      setIsCheckingAuth(false);
    };
    return initializeAuth();
  }, []);

  const login = ({ email, password }) => {
    console.log({ email, password });
    User.login({ email, password })
      .then((res) => {
        console.log({ res });
        const token = res.data.token;
        window.localStorage.setItem("jwt", token);
        window.localStorage.setItem("role", res.data.role);
        api.defaults.headers.common["x-access-token"] = token;
        setRole(res.data.role);
        delete res.data.token;
        const user = res.data;
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log("something went wrong", err);
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("role");
      });
  };

  const logout = async () => {
    try {
      await User.logout();
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("role");
      setCurrentUser(USER_STATES.NOT_LOGGED);
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const register = async ({
    name,
    lastname,
    cellphone,
    email,
    password,
    roles,
  }) => {
    try {
      const res = await User.register({
        name,
        lastname,
        cellphone,
        email,
        password,
        roles,
      });
      console.log({ res });
      return res;
    } catch (e) {
      console.log("something went wrong");
    }
  };

  return (
    <Context.Provider
      value={{
        login,
        currentUser,
        logout,
        register,
        isLoggedIn: Boolean(currentUser),
        role,
        isCheckingAuth,
        users,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export default Context;
