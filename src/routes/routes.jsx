import { createBrowserRouter } from "react-router-dom";
import { RestaurantPage } from "../pages/user/RestaurantPage.jsx";
import { Wishlist } from "../pages/user/Wishlist";
import { Cart } from "../pages/user/Cart";
import { ReviewPage } from "../pages/user/ReviewPage";
import { Login } from "../pages/shared/Login";
import { Signup } from "../pages/shared/Signup";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { UserLayout } from "../layout/UserLayout";
import { MenuPage } from "../pages/user/MenuPage";
import { Home } from "../pages/user/Home";
import Contactus from "@/pages/user/Contactus";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <UserLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
        { path: "rest", element: <RestaurantPage /> },
        { path: "menu", element: <MenuPage /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "profile", element: <h1>Profile page</h1> },
        { path: "cart", element: <Cart /> },
        { path: "review", element: <ReviewPage /> },
        { path: "contactus", element: <Contactus />},
      ],
    },
  ],
);
