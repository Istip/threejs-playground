import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import DreiScene from "./components/DreiScene";
// import Scene from "./components/Scene";
// import { Perf } from "r3f-perf";
// import Box from "./components/Box";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={null}>
    <Canvas
      shadows
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
      <DreiScene />
    </Canvas>
  </Suspense>
);

reportWebVitals();
