import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import ControlsComponent from "./components/Controlers/ControlsComponent";
// import CameraTest from "./components/CameraTest";
// import StudioExample from "./components/StudioExample";
// import Scene from "./components/Scene";
// import { Perf } from "r3f-perf";
// import Box from "./components/Box";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Suspense fallback={null}>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [1, 3, 6],
        }}
      >
        {/* <Scene /> */}
        {/* <Box /> */}
        {/* <Perf /> */}
        {/* <StudioExample */}
        {/* <CameraTest /> */}
        <ControlsComponent />
      </Canvas>
    </Suspense>
  </>
);

reportWebVitals();
