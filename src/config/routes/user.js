import Home from "../../components/home/Home";
import Login from "../../pages/home/login";
import Register from "../../pages/home/register";
import Cart from "../../pages/user/cart";
import Contact from "../../pages/user/contact";
import Homepage from "../../pages/user/home";

const userRouter = [
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
];
export default userRouter;
