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

  const [state, setState] = useState({ loading: false, error: true });

  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);

  console.log({ user });
  const login = ({ email, password }) => {
    setState({ loading: true, error: false });
    User.login({ email, password })
      .then((res) => {
        setState({ loading: false, error: false });
        setJWT(res.data.token);
        console.log(res);
      })
      .catch((err) => setState({ loading: false, error: true }));
  };

  useEffect(() => {
    const getUser = () => {
      User.getAuthenticatedUser(jwt)
        .then((resp) => setUser(resp.data.user))
        .catch((err) => console.log(err));
    };
    if (jwt) getUser();
    //TO DO checking user states
    if (typeof jwt === JWT_STATES.NOT_LOGGED) setUser(USER_STATES.NOT_LOGGED);
  }, [jwt]);

  return { login, isLogged: Boolean(user), user };
}
