import { useContext, useEffect, useState } from "react";
import User from "../api/user";
import Context from "../context/UserContext";
import { JWT_STATES } from "../context/UserContext";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const login = ({ email, password }) => {
    User.login({ email, password })
      .then((res) => {
        setJWT(res.data.token);
        window.sessionStorage.setItem('jwt', res.data.token)
      })
      .catch((err) => {
        window.sessionStorage.removeItem('jwt')
      })
  };

  useEffect(() => {
    const getUser = () => {
      User.getAuthenticatedUser(jwt)
        .then((resp) => setUser(resp.data.user))
        .catch((err) => console.log(err));
    };
    if (jwt) getUser();
    if (jwt === JWT_STATES.NOT_KNOWN) setUser(USER_STATES.NOT_KNOWN);
    if (jwt === JWT_STATES.NOT_LOGGED) setUser(USER_STATES.NOT_LOGGED);
  }, [jwt]);

  const logout = () => {
      setJWT(JWT_STATES.NOT_LOGGED)
      window.sessionStorage.removeItem('jwt')
  }

  return { login, logout, isLogged: Boolean(user), user };
}
