import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import ClientInformation from "@/use-suspense/ClientInformation.tsx";
import { getUserAction } from "@/use-suspense/actions/get-user.action.ts";

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
    {/*<InstagromApp />*/}
    <Suspense
      fallback={
        <div className={"bg-gradient"}>
          <h1 className={"text-2xl"}>Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(123)} />
    </Suspense>
  </StrictMode>,
);
