import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContexts = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const token = Cookies.get("token");

  const getUser = async () => {
    const fetchUser = await axiosSecure.get("/user");
    setUser(fetchUser.data);
    setUserLoading(false);
  };

  useEffect(() => {
    if (token) {
      return () => getUser();
    }
    setUserLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log(user);

  const value = {
    user,
    userLoading
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
