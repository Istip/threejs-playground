import * as THREE from "three";
import { OrbitControls, Sky, Sparkles } from "@react-three/drei";

const SparkySkyExample = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />

      <Sparkles
        count={2000}
        speed={1}
        opacity={1}
        color="black"
        scale={[10, 10, 10]}
      />

      <Sky sunPosition={[-1.3, 0.2, 0]} />

      <mesh
        receiveShadow
        position={[0, -0.51, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
      >
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="black" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default SparkySkyExample;
