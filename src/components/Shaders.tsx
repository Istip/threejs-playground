import * as THREE from "three";
import {
  OrbitControls,
  // Environment,
  Float,
  GradientTexture,
  MeshDistortMaterial,
  // MeshReflectorMaterial,
  // MeshWobbleMaterial,
  useCursor,
  // useTexture,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Shaders = () => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null) as any;

  useCursor(hover);

  // const sun = useTexture("./images/sun.jpg");

  const { lerp } = THREE.MathUtils;

  useFrame(() => {
    ref.current.material.distort = lerp(
      ref.current.material.distort,
      hover ? 0.4 : 0,
      hover ? 0.05 : 0.01
    );
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />

      {/* <Environment background files="./envMap/1.hdr" /> */}

      {/* MIRROR MATERIAL */}
      {/* <mesh position={[-Math.PI * 0.05, -0.5, -0.75]} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />
        <MeshReflectorMaterial
          mirror={1}
          resolution={256}
          color="white"
          blur={[1000, 1000]}
          mixBlur={1}
        />
      </mesh> */}

      {/* WOBBLE MATERIAL */}
      {/* <mesh>
        <dodecahedronGeometry args={[5, 5]} />
        <MeshWobbleMaterial metalness={0} map={sun} factor={3} speed={0.8} />
      </mesh> */}

      {/* DISTORT MATERIAL */}
      <Float>
        <mesh
          ref={ref}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <planeGeometry args={[2, 3, 4, 8]} />
          <MeshDistortMaterial side={THREE.DoubleSide}>
            <GradientTexture
              colors={["tomato", "orange", "yellow"]}
              stops={[0, 0.5, 1]}
            />
          </MeshDistortMaterial>
        </mesh>
      </Float>
    </>
  );
};

export default Shaders;
