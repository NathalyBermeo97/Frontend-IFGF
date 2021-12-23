import { USER_ROLES } from "../constans/userRoles";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export function withPrivate(Component) {
  const WithPrivate = (props) => {
    const { currentUser, role, isCheckingAuth } = useAuth();
    const [router, setRouter] = useState("");

    console.log("FromHocPrivate", { currentUser, role });
    console.log({ router });
    const r = useRouter();
    useEffect(() => {
      setRouter(r);
    }, [r]);
    if (isCheckingAuth) return <>Cargando...</>;
    if (!currentUser) {
      router.replace("/login");
      return <>Loadind...</>;
    }

    if (role === USER_ROLES.ADMIN) {
      router.replace("/admin");
      return <>Loading...</>;
    }

    return <Component {...props} />;
  };
  return WithPrivate;
}
