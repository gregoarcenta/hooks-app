import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FocusScreen from "./useRef/FocusScreen.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<HooksApp />*/}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWithEffect />*/}
    {/*<TrafficLightWithHook />*/}
    {/*<PokemonPage />*/}
    <FocusScreen />
  </StrictMode>,
);
