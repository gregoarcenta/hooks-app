import { type User } from "@/use-suspense/actions/get-user.action.ts";
import { type Usable, use } from "react";

interface Props {
  getUser: Usable<User>;
}

const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);

  // useEffect(() => {
  //   getUserAction(id).then(console.log);
  // }, [id]);
  return (
    <div className={"bg-gradient flex flex-col gap-4"}>
      <h1 className={"text-4xl font-thin text-white"}>
        {user.name} - {user.id}#
      </h1>
      <p className={"text-2xl text-white"}>{user.location}</p>
      <p className={"text-2xl text-white"}>{user.role}</p>
    </div>
  );
};

export default ClientInformation;
