import { createContext, useCallback, useEffect, useState } from "react";
import api from "../utils/api";
import fb from "../utils/fb";

export const AuthContext = createContext({
  isLogin: false,
  user: {},
  loading: false,
  accessToken: "",
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("userProfile")) || undefined;
  });
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(() => {
    return JSON.parse(localStorage.getItem("accessToken")) || undefined;
  });

  // const handleLoginResponse = useCallback(async (response) => {
  //   const accessToken = response.authResponse.accessToken;
  //   const { data } = await api.signin({
  //     provider: "facebook",
  //     access_token: accessToken,
  //   });
  //   const { access_token: tokenFromServer, user: userData } = data;
  //   setUser(userData);
  //   setAccessToken(tokenFromServer);
  //   window.localStorage.setItem("accessToken", tokenFromServer);
  //   setIsLogin(true);
  //   return tokenFromServer;
  // }, []);

  useEffect(() => {
    console.log("validating token...");
    console.log(accessToken);
    if (!accessToken) {
      console.log("no token, aborting");
      return;
    }
    const checkAuthStatus = async () => {
      const response = await api.getProfile(accessToken);
      const data = response?.data ?? null;

      console.log(data);
      if (data) {
        setIsLogin(true);
        setLoading(false);
        setUser(data);
      } else {
        console.log("token invalid");
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("userProfile");
        setLoading(false);
      }
    };
    checkAuthStatus();

    // if (response.status === "connected") {
    //   handleLoginResponse(response);
    //   setLoading(false);
    // } else {
    //   window.localStorage.removeItem("accessToken");
    //   setLoading(false);
    // }
  }, []);

  // const login = async () => {
  //   setLoading(true);
  //   // TODO: Send data to Login API
  //   const response = await fb.login();
  //   if (response.status === "connected") {
  //     const tokenFromServer = handleLoginResponse(response);
  //     setLoading(false);
  //     return tokenFromServer;
  //   } else {
  //     window.localStorage.removeItem("accessToken");
  //     setLoading(false);
  //     return null;
  //   }
  // };

  const login = async () => {
    setLoading(true);
    // TODO: Send data to Login API
    const response = await fb.login();
    if (response.status === "connected") {
      const tokenFromServer = handleLoginResponse(response);
      setLoading(false);
      return tokenFromServer;
    } else {
      window.localStorage.removeItem("accessToken");
      setLoading(false);
      return null;
    }
  };

  const logout = async () => {
    setLoading(true);
    // await fb.logout();
    setIsLogin(false);
    setUser({});
    setAccessToken();
    window.localStorage.removeItem("accessToken");
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        user,
        loading,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
