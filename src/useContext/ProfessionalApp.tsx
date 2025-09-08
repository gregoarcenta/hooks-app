import { RouterProvider } from "react-router";
import { appRouter } from "@/useContext/router/app.router.tsx";
import { UserContextProvider } from "@/useContext/context/UserContext.tsx";

const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};

export default ProfessionalApp;
