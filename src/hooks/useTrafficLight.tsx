import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type Light = keyof typeof colors;

const useTrafficLight = () => {
  const [light, setLight] = useState<Light>("red");
  const [countDown, setCountDown] = useState(5);

  // Countdown effect
  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDown]);

  // Light effect
  useEffect(() => {
    if (countDown > 0) return;

    setCountDown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "yellow") {
      setLight("red");
      return;
    }

    if (light === "green") {
      setLight("yellow");
      return;
    }
  }, [countDown, light]);

  return {
    //props
    countDown,

    //computed
    percentage: (countDown / 5) * 100,
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    greenLight: light === "green" ? colors.green : "bg-gray-500",
  };
};

export default useTrafficLight;
