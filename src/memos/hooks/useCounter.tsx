import { useState } from "react";

const UseCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return {
    //props
    counter,

    //methods
    increment,
    decrement,
  };
};

export default UseCounter;
