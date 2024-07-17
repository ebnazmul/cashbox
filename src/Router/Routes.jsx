import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../componant/Home/Home";
import Register from "../componant/Register/Register";

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
    ],
  },
]);

export default routes;
