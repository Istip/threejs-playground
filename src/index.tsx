import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Suspense } from "react";
// import { Perf } from "r3f-perf";
// import Box from "./components/Box";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={null}>
    <Canvas
      camera={{
        fov: 75,
        near: 1,
        far: 100,
        zoom: 20,
        position: [4, 20, 80],
      }}
    >
      <ambientLight />
      <directionalLight position={[0, 2, 4]} />

      <Scene />
      {/* <Box /> */}
      {/* <Perf /> */}
    </Canvas>
  </Suspense>
);

reportWebVitals();
