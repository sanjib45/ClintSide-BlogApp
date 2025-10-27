import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Singleblog from "./Home/Singleblog";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./admin/Dashboard/Dashboard";
import Addblog from "./admin/Dashboard/Addblog";
import Admindashboard from "./admin/Admindashboard";
import ManageBlog from "./admin/Dashboard/ManageBlog";
import Privaterouter from "./Privaterouter";
import DeleteBlog from "./admin/Dashboard/DeleteBlog";
import ManageUser from "./admin/Dashboard/ManageUser";
import DeleteUser from "./admin/Dashboard/DeleteUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/posts/:id",
        element: <Singleblog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: (
          <Privaterouter>
            <Admindashboard />
          </Privaterouter>
        ),
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "addblog",
            element: <Addblog />,
          },
          {
            path: "manageblog",
            element: <ManageBlog />,
          },
          {
            path: "deleteblog",
            element: <DeleteBlog />,
          },
          {
            path: "manageuser",
            element: <ManageUser />,
          },
          {
            path: "deleteuser",
            element: <DeleteUser />,
          },
        ],
      },
    ],
  },
]);

export default router;
