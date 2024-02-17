import * as THREE from "three";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { folder, useControls } from "leva";
import Texts from "./Texts";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const GlassTest = () => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null as any);

  const { lerp } = THREE.MathUtils;

  useFrame(({ pointer }) => {
    // POSITION CHANGE
    ref.current.position.x = lerp(ref.current.position.x, pointer.x, 1);
    ref.current.position.y = lerp(ref.current.position.y, pointer.y, 1);

    // SCALE CHANGE
    ref.current.scale.x = lerp(ref.current.scale.x, hover ? 2 : 0.5, 0.1);
    ref.current.scale.y = lerp(ref.current.scale.y, hover ? 2 : 0.5, 0.1);
    ref.current.scale.z = lerp(ref.current.scale.z, hover ? 2 : 0.5, 0.1);
  });

  // LEVA CONTROLS
  const {
    distortionScale,
    temporalDistortion,
    thickness,
    ior,
    chromaticAberration,
    roughness,
    anisotropicBlur,
    transmission,
    backsided,
  } = useControls("GLASS", {
    DEFAULT: folder({
      distortionScale: { value: 0.5, min: 0, max: 10, step: 0.05 },
      temporalDistortion: { value: 0.5, min: 0, max: 10, step: 0.05 },
    }),
    BASIC: folder({
      thickness: { value: 0.2, min: 0, max: 10, step: 0.05 },
      ior: { value: 1.75, min: 0, max: 10, step: 0.01 },
      chromaticAberration: { value: 0.1, min: 0, max: 10, step: 0.05 },
    }),
    STRANGE: folder({
      roughness: { value: 0, min: 0, max: 10, step: 0.01 },
      anisotropicBlur: { value: 0, min: 0, max: 10, step: 0.01 },
      transmission: { value: 1, min: 0, max: 10, step: 0.01 },
      backsided: false,
    }),
  });

  return (
    <>
      <Environment preset="city" />
      <Texts />
      {/* <mesh
        ref={ref}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[0, 0, 2]}
        scale={2}
      >
        <circleGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          distortionScale={distortionScale}
          temporalDistortion={temporalDistortion}
          thickness={thickness}
          ior={ior}
          chromaticAberration={chromaticAberration}
          roughness={roughness}
          anisotropicBlur={anisotropicBlur}
          transmission={transmission}
          backside={backsided}
        />
      </mesh> */}

      <mesh
        ref={ref}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[0, 0, 2]}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          distortionScale={distortionScale}
          temporalDistortion={temporalDistortion}
          thickness={thickness}
          ior={ior}
          chromaticAberration={chromaticAberration}
          roughness={roughness}
          anisotropicBlur={anisotropicBlur}
          transmission={transmission}
          backside={backsided}
        />
      </mesh>
    </>
  );
};

export default GlassTest;
