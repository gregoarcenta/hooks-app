import { createBrowserRouter, Navigate } from "react-router";
import AboutPage from "@/useContext/pages/about/About.page.tsx";
import ProfilePage from "@/useContext/pages/profile/Profile.page.tsx";
import AuthPage from "@/useContext/pages/auth/Auth.page.tsx";
import { PrivateRoute } from "./PrivateRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />
  },
  {
    path: "/login",
    element: <AuthPage />
  },
  {
    path: "*",
    element: <Navigate to={"/"} />
  }
]);
