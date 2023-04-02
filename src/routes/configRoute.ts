import RequireAuth from "../components/RequireAuth";
import Layout from "../components/Layout ";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";

const configRoute = [
  {
    path: "/",
    element: Layout,
    children: [
      {
        index: true,
        element: Home,
      },
      {
        path: "/signup",
        element: Register,
      },
      {
        path: "/signin",
        element: Login,
      },
      {
        path: "/profile",
        element: RequireAuth
      },
    ],
  },
];

export default configRoute;