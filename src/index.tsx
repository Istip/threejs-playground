import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Suspense } from "react";
import { Perf } from "r3f-perf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={null}>
    <Canvas
      orthographic
      camera={{
        fov: 75,
        near: 1,
        far: 1000,
        zoom: 100,
        position: [4, 20, 80],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 50]} intensity={1} />

      <Scene />
      <Perf />
    </Canvas>
  </Suspense>
);

reportWebVitals();
