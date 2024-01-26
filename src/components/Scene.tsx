import { OrbitControls, useGLTF } from "@react-three/drei";

const Scene = () => {
  const model = useGLTF("/model/barrel.glb");

  return (
    <>
      <OrbitControls />

      <OrbitControls />
      <primitive object={model.scene} />
    </>
  );
};

export default Scene;
