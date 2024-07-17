import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../componant/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
