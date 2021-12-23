import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import {USER_ROLES} from '../constans/userRoles'

export function withPublic(Component) {
  const WithPublic = (props) => {
    const { currentUser, role, isCheckingAuth} = useAuth();
    const router = useRouter();
    console.log('FromHocPublic', {currentUser, role})
    if(isCheckingAuth) return <>Cargando...</>
    if (currentUser) {
        if(role === USER_ROLES.USER){
          router.replace('/')
        }else{
          router.replace('/admin')
        }
        return <>Loading...</>
    }
    return <Component {...props}/>
  };
  return WithPublic
}
