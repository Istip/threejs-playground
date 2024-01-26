import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Suspense } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={null}>
    <Canvas
      orthographic
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        zoom: 120,
        position: [0, 0, 6],
      }}
    >
      <Scene />
    </Canvas>
  </Suspense>
);

reportWebVitals();
