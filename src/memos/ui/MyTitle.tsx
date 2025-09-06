import React from "react";

interface MyTitleProps {
  title: string;
}
const MyTitle = React.memo(({ title }: MyTitleProps) => {
  console.log("re-render");
  return <h1 className={"text-3xl font-bold"}>{title}</h1>;
});

export default MyTitle;
