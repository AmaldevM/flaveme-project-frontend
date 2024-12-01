import { createBrowserRouter } from "react-router-dom";
import { RestaurantPage } from "../pages/user/RestaurantPage.jsx";
import { Wishlist } from "../pages/user/loginUser/Wishlist.jsx";
import { Cart } from "../pages/user/loginUser/Cart.jsx";
import { ReviewPage } from "../pages/user/loginUser/ReviewPage.jsx";
import { Login } from "../pages/shared/Login";
import { Signup } from "../pages/shared/Signup";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { UserLayout } from "../layout/UserLayout";
import { Home } from "../pages/user/Home";
import Contactus from "@/pages/user/Contactus";
import AuthUser from "./protectedRoutes/AuthUser.jsx";
import RestDetails from "@/pages/user/loginUser/RestDetails.jsx";
import ProfilePage from "@/pages/user/loginUser/ProfilePage.jsx";
import Menus from "@/components/user/Menus.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "rest", element: <RestaurantPage /> },
      { path: "menu", element: <Menus /> },
      { path: "contactus", element: <Contactus /> },
      // Logged-in user
      {
        path: "user",
        element: <AuthUser />,
        children: [
          { path: "restaurants/:restaurantid",  element: <RestDetails />, },
          { path: "profile/:id", element: <ProfilePage />, },
          { path: "getCart", element: <Cart />, },
          { path: "wishlist", element: <Wishlist /> },
          { path: "review", element: <ReviewPage /> },
        ],
      },
    ],
  },
]);
