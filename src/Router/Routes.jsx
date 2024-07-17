import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../componant/Home/Home";
import Register from "../componant/Register/Register";
import Dashboard from "../componant/Dashboard/Dashboard";
import Sendmoney from "../componant/Sendmoney/Sendmoney";
import DashboardLayout from "../componant/Dashboard/DashboardLayout";
import Login from "../componant/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "sendmoney",
        element: <Sendmoney />,
      },
    ],
  },
]);

export default routes;
