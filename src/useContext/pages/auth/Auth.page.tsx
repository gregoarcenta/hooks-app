import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { use, useState } from "react";
import { UserContext } from "@/useContext/context/UserContext";
import { toast } from "sonner";

const AuthPage = () => {
  const { login } = use(UserContext);
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = login(+userId);

    if (!result) {
      toast.error(`Usuario no encontrado`);
      return;
    }

    navigation("/profile");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-4 w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="ID del usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button type={"submit"}>Login</Button>
        </form>
        <Link to="/">
          <Button variant={"ghost"} className={"w-full"}>
            Volver a la pagina principal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
