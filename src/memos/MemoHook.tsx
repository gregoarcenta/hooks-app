import MyTitle from "@/memos/ui/MyTitle.tsx";
import { useCallback, useState } from "react";
import MySubTitle from "@/memos/ui/MySubTitle.tsx";

const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubTitle] = useState("Hola subtitle");

  const handleMyAPICall = useCallback(() => {
    console.log("llamando a la api - ", subtitle);
  }, [subtitle]);

  return (
    <div className={"bg-gradient flex flex-col gap-4"}>
      <h1 className={"text-2xl font-thin text-white"}>MemoApp</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button
        className={"text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer"}
        onClick={() => setTitle("Hello")}
      >
        Cambiar Titulo
      </button>
      <button
        className={"text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer"}
        onClick={() => setSubTitle("World")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};

export default MemoHook;
