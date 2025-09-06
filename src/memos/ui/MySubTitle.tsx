import React from "react";

interface MySubTitleProps {
  subtitle: string;
  callMyAPI: () => void;
}
const MySubTitle = React.memo(({ subtitle, callMyAPI }: MySubTitleProps) => {
  console.log("re-render subtitle");
  return (
    <>
      <h6 className={"text-2xl font-bold"}>{subtitle}</h6>
      <button
        type="button"
        className={
          "bg-indigo-500 py-1 px-2 text-white rounded-md cursor-pointer "
        }
        onClick={callMyAPI}
      >
        Llamar a funcion
      </button>
    </>
  );
});

export default MySubTitle;
