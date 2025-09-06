import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MemoCounter from "@/memos/MemoCounter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<HooksApp />*/}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWithEffect />*/}
    {/*<TrafficLightWithHook />*/}
    {/*<PokemonPage />*/}
    {/*<FocusScreen />*/}
    {/*<TasksApp />*/}
    {/*<ScrambleWords />*/}
    {/*<MemoHook />*/}
    <MemoCounter />
  </StrictMode>,
);
