import { useContext, useEffect, useState } from "react";
import User from "../api/user";
import Context from "../context/AuthContext";
import { JWT_STATES } from "../context/AuthContext";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const [role, setRole] = useState(null)
  const [user, setUser] = useState(USER_STATES.NOT_LOGGED);
  console.log('FromHook', {user, role, jwt})
  // const login = ({ email, password }) => {
  //   User.login({ email, password })
  //     .then((res) => {
  //       setRole(res.data.role);
  //       setJWT(res.data.token);
  //       window.localStorage.setItem('jwt', res.data.token)
  //       window.localStorage.setItem('role', res.data.role)
  //     })
  //     .catch((err) => {
  //       console.log('something went wrong', err)
  //       window.localStorage.removeItem('jwt')
  //       window.localStorage.removeItem('role')
  //     })
  // };

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

  useEffect(() => {
    setRole(window.localStorage.getItem('role'));
  }, []);

  const logout = async () => {
      try{
        //await User.logout()
        setJWT(JWT_STATES.NOT_LOGGED)
        window.localStorage.removeItem('jwt')
        window.localStorage.removeItem('role')
      }catch(e){
        console.log('something went wrong', e)
      }
  }

  const register = async ({name, lastName, email, password, roles}) => {
    try{
      const res = await User.register({name, lastname: lastName, email, password, roles})
      return res
    }catch(e){
      console.log('something went wrong')
    }
  }

  return { register, logout, isLogged: Boolean(user), user, role, jwt};
}
