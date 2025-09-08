import { use } from "react";
import { Button } from "@/components/ui/button.tsx";
import { UserContext } from "@/useContext/context/UserContext";

const ProfilePage = () => {
  const { user, logout } = use(UserContext);
  return (
    <div className={"flex flex-col items-center justify-center min-h-screen"}>
      <h1 className={"text-4xl"}>Perfil del usuario</h1>

      <pre className={"my-4 whitespace-pre-wrap"}>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <Button variant={"destructive"} onClick={logout}>
        Salir
      </Button>
    </div>
  );
};

export default ProfilePage;
