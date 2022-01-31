import { useRouter } from "next/router";
import { Spinner } from "../components/Spinner";
import { useAuth } from "../context/AuthContext";

export function withAuthRedirect({ Component, expectedAuth, location }) {
  const WithAuthRedirect = (props) => {
    const router = useRouter();
    const { isCheckingAuth, isLoggedIn, role } = useAuth();
    if (isCheckingAuth) {
      return <Spinner />
    }
    if (typeof window !== "undefined" && expectedAuth !== isLoggedIn) {
      console.log("after", { expectedAuth, isLoggedIn });
      router.push(location);
      return <Spinner />
    }
    if (router.pathname.startsWith("/admin") && role !== "admin") {
      router.replace("/");
      return <Spinner />
    }
    return <Component {...props} />;
  };
  return WithAuthRedirect;
}
