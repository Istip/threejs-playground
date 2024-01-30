import { OrbitControls, Outlines, TransformControls } from "@react-three/drei";
import { useState } from "react";

const TransformControllers = () => {
  const controls = false;
  const [selected, setSelected] = useState(false);

  const Mesh = () => (
    <mesh onPointerUp={() => setSelected(!selected)}>
      <ambientLight intensity={0.1} position={[0, 0, 0]} />
      <directionalLight position={[1, 1, 1]} />

      <boxGeometry />
      <meshBasicMaterial />
      {selected && <Outlines thickness={0.05} color="tomato" />}
    </mesh>
  );

  return (
    <>
      <OrbitControls />
      {controls ? (
        <TransformControls>
          <Mesh />
        </TransformControls>
      ) : (
        <Mesh />
      )}
    </>
  );
};

export default TransformControllers;
