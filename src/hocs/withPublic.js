import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export function withPublic(Component) {
  const WithPublic = (props) => {
    const { currentUser, role, isCheckingAuth} = useAuth();
    const router = useRouter();
    console.log('FromHocPublic', {currentUser, role})
    if(isCheckingAuth) return <>Cargando...</>
    if (currentUser) {
        router.replace('/')
        return <>Loading...</>
    }
    return <Component {...props}/>
  };
  return WithPublic
}
