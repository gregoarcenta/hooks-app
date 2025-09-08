import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState
} from "react";
import { type User, users } from "@/useContext/data/user-mock.data.ts";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  isAthenticated: boolean;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log("login - ", userId);
    const user = users.find((user) => user.id === userId);

    if (!user) {
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", String(user.id));
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    setAuthStatus("not-authenticated");
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return handleLogout();

    handleLogin(Number(userId));
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAthenticated: authStatus === "authenticated",
        user: user,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </UserContext>
  );
};
