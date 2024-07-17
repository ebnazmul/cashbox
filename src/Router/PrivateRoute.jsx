import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContexts);
  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
