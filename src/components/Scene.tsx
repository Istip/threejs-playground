import { OrbitControls } from "@react-three/drei";
import ZombieCar from "./Zombie";
// import Car from "./Car";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[3, 3, 0]} />

      <ZombieCar />
    </>
  );
};

export default Scene;
