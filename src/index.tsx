import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Texts from "./components/Texts";
// import TransformControllers from "./components/Controlers/TransformControllers";
// import ControlsComponent from "./components/Controlers/ControlsComponent";
// import OrbitController from "./components/Controlers/OrbitController";
// import PresentationController from "./components/Controlers/PresentationController";
// import ScrollControllers from "./components/Controlers/ScrollControllers";
// import CameraTest from "./components/CameraTest";
// import StudioExample from "./components/StudioExample";
// import Scene from "./components/Scene";
// import { Perf } from "r3f-perf";
// import Box from "./components/Box";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const scrollControlCameraSetup = {
  fov: 75,
  position: [0, 0, 5],
} as any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const transformControlCameraSetup = {
  position: [0, 2, 5],
  fov: 75,
} as any;

root.render(
  <>
    <Suspense fallback={null}>
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 75,
          zoom: 1,
          near: 0.1,
          far: 1000,
        }}
      >
        {/* <Scene /> */}
        {/* <Box /> */}
        {/* <Perf /> */}
        {/* <StudioExample */}
        {/* <CameraTest /> */}
        {/* <ControlsComponent /> */}
        {/* <OrbitController /> */}
        {/* <PresentationController /> */}
        {/* <ScrollControllers /> */}
        {/* <TransformControllers /> */}
        <Texts />
      </Canvas>
    </Suspense>
  </>
);

reportWebVitals();
