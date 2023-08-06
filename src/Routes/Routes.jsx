import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Signup from "../Pages/Signup/Signup";
import Alltoy from "../Pages/Alltoy/Alltoy";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import Blogs from "../Pages/Blogs/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/alltoy",
        element: <Alltoy></Alltoy>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoy/${params.id}`),
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
    
  },
]);

export default router;
