import { AuthContext } from "../../context/authContext";
import LoginWindow from "../LoginWindow";
import { useContext, useEffect } from "react";

export default function ProtectedComponent({ component: Component }) {
  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  if (!isLogin) return <LoginWindow />;
  return <Component />;
}
