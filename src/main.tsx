import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TasksApp } from "./useReducer/TasksApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<HooksApp />*/}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWithEffect />*/}
    {/*<TrafficLightWithHook />*/}
    {/*<PokemonPage />*/}
    {/*<FocusScreen />*/}
    <TasksApp />
  </StrictMode>,
);
