import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black p-2 rounded-md"
        autoFocus
      />
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
        onClick={onClick}
      >
        Set Focus
      </button>
    </div>
  );
};

export default FocusScreen;
