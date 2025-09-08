import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { use, type JSX } from "react";
import { Link } from "react-router";

const AboutPage = () => {
  const { isAthenticated, logout } = use(UserContext);

  const renderProfileLink = (): JSX.Element => {
    return (
      <Link to={"profile"} className={"underline"}>
        Ir al perfil
      </Link>
    );
  };

  const renderLoginLink = (): JSX.Element => {
    return (
      <Link to={"login"} className={"underline"}>
        Iniciar sesión
      </Link>
    );
  };

  const renderLogoutButton = (): JSX.Element => {
    return (
      <Button variant={"destructive"} onClick={logout}>
        Cerrar sesión
      </Button>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our platform. We are dedicated to providing the best
          service to our users.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <div className={"flex flex-col gap-4"}>
          {isAthenticated && renderProfileLink()}

          {isAthenticated ? renderLogoutButton() : renderLoginLink()}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
