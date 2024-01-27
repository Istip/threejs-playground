import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [scaleSecondMesh, setScaleSecondMesh] = useState(1);

  return (
    <>
      <OrbitControls />

      <mesh position={[1, 0, 0]} onClick={(e) => e.stopPropagation()}>
        <boxGeometry />
        <meshStandardMaterial color="tomato" />
      </mesh>

      <mesh
        position={[-1, 0, 0]}
        scale={scaleSecondMesh}
        onClick={() => setScaleSecondMesh(scaleSecondMesh === 1 ? 2 : 1)}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="orange"
          wireframe={scaleSecondMesh === 2}
        />
      </mesh>
    </>
  );
};

export default Scene;
