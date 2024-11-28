import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../Layouts/layout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import Signup from "../Pages/Auth/Signup/Signup";
import Login from "../Pages/Auth/Login/Login";

const checkAuthLoader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null; // No redirection, allow navigation
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // Home route
      {
        path: "",
        element: <Home />,
      },
      // About route
      {
        path: "about",
        element: <About />,
      },
      // Auth routes
      {
        path: "auth",
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      // Protected route
      {
        path: "/profile",
        element: <Profile />,
        loader: checkAuthLoader,
      },
    ],
  },
]);

export default router;
