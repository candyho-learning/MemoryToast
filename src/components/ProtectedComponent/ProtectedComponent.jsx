import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect } from "react";

export default function ProtectedComponent({ component: Component }) {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("in protected component");
  console.log(`log in state is ${isLogin}`);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [isLogin]);

  return <Component />;
}
