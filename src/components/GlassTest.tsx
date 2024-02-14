import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Texts from "./Texts";
import { useControls } from "leva";

const GlassTest = () => {
  const {
    distortionScale,
    temporalDistortion,
    thickness,
    ior,
    chromaticAberration,
  } = useControls("GLASS", {
    distortionScale: { value: 0.5, min: 0, max: 10, step: 0.05 },
    temporalDistortion: { value: 0.5, min: 0, max: 10, step: 0.05 },
    thickness: { value: 0.5, min: 0, max: 10, step: 0.05 },
    ior: { value: 0.5, min: 0, max: 10, step: 0.05 },
    chromaticAberration: { value: 0.5, min: 0, max: 10, step: 0.05 },
  });

  return (
    <>
      <Canvas
        orthographic
        camera={{
          fov: 75,
          near: 0.1,
          far: 50,
          position: [0, 0, 6],
          zoom: 200,
        }}
      >
        <OrbitControls />
        <Environment preset="sunset" />
        <Texts />
        <mesh position={[0, 0, 3]} scale={1}>
          <circleGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            distortionScale={distortionScale}
            temporalDistortion={temporalDistortion}
            thickness={thickness}
            ior={ior}
            chromaticAberration={chromaticAberration}
          />
        </mesh>
      </Canvas>
    </>
  );
};

export default GlassTest;
