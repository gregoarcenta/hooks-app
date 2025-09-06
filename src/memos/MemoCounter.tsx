import UseCounter from "@/memos/hooks/useCounter.tsx";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_stuff_started");

  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos!");
  }

  console.timeEnd("Heavy_stuff_started");

  return `${iterationNumber} iteraciones realizadas`;
};

const MemoCounter = () => {
  const { counter, increment, decrement } = UseCounter(10_000);
  const { counter: counter2, increment: increment2 } = UseCounter(10);

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className={"bg-gradient flex flex-col gap-4"}>
      <h1 className={"text-2xl font-bold"}>Memo - UseMemo - {myHeavyValue}</h1>
      <hr />

      <h4>Counter: {counter}</h4>
      <h4>Counter 2: {counter2}</h4>

      <div>
        <button
          className={
            "text-white bg-blue-500 px-3 py-1 mr-3 rounded-md cursor-pointer"
          }
          onClick={decrement}
        >
          -1
        </button>
        <button
          className={
            "text-white bg-blue-500 px-3 py-1 mr-3 rounded-md cursor-pointer"
          }
          onClick={increment}
        >
          +1
        </button>
        <button
          className={
            "text-white bg-blue-500 px-3 py-1 rounded-md cursor-pointer"
          }
          onClick={increment2}
        >
          +1 al counter2
        </button>
      </div>
    </div>
  );
};

export default MemoCounter;
