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
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) =>
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
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
