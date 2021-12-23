import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export function withAuthRedirect({ Component, expectedAuth, location }) {
  const WithAuthRedirect = (props) => {
    const router = useRouter();
    const { isCheckingAuth, isLoggedIn, role } = useAuth();
    if (isCheckingAuth) {
      return <>Loading...</>;
    }
    if (typeof window !== "undefined" && expectedAuth !== isLoggedIn) {
      console.log("after", { expectedAuth, isLoggedIn });
      router.push(location);
      return <>Cargando...........</>;
    }
    if (router.pathname.startsWith("/admin") && role !== "admin") {
        router.replace('/')
        return <>Cargando...</>
    }
    return <Component {...props} />;
  };
  return WithAuthRedirect;
}
