import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { InstagromApp } from "@/useOptimistic/InstagromApp.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/*<HooksApp />*/}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWithEffect />*/}
    {/*<TrafficLightWithHook />*/}
    {/*<PokemonPage />*/}
    {/*<FocusScreen />*/}
    {/*<TasksApp />*/}
    {/*<ScrambleWords />*/}
    {/*<MemoHook />*/}
    {/*<MemoCounter />*/}
    <InstagromApp />
  </StrictMode>,
);
