import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Canvas } from "@react-three/fiber";
// import PortalExample from "./components/PortalExample";
// import SpringBox from "./components/Spring/SpringBox";
// import SpringPropsTest from "./components/Spring/SpringPropsTest";
// import Shaders from "./components/Shaders";
// import Texts from "./components/Texts";
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
// import MultipleSprings from "./components/Spring/MultipleSprings";
// import TrailDemo from "./components/Spring/TrailDemo";
// import PhysicsScene from "./components/Rapier/PhysicsScene";
import ForcePhysics from "./components/Rapier/ForcePhysics";

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
        // shadows only visible when passed in the Canvas component
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 1, -10],
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
        {/* <Texts /> */}
        {/* <Shaders /> */}
        {/* <PortalExample /> */}
        {/* <SpringBox /> */}
        {/* <SpringPropsTest /> */}
        {/* <MultipleSprings /> */}
        {/* <TrailDemo /> */}
        {/* <PhysicsScene /> */}
        <ForcePhysics />
      </Canvas>
    </Suspense>
  </>
);

reportWebVitals();
