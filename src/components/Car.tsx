import { OrbitControls, useGLTF } from "@react-three/drei";

const Car = () => {
  const model = useGLTF("/model/ferrari.glb");

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} position={[10, 10, 5]} />
      <primitive object={model.scene} />
    </>
  );
};

useGLTF.preload("/model/ferrari.glb");

export default Car;
