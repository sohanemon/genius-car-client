import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/home";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
