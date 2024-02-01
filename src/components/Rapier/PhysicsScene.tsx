import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

const PhysicsScene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <Physics
        gravity={[0, -9.81, 0]}
        // debug
      >
        <RigidBody>
          <mesh castShadow position={[0, 1.5, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </mesh>
        </RigidBody>

        <RigidBody colliders="hull" mass={200}>
          <mesh position={[-1.5, 1.5, 0]}>
            <torusKnotGeometry args={[0.5, 0.15, 100, 100]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody colliders="ball">
          <mesh position={[0, 1.25, -1]}>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh
            position={[0, -1, 0]}
            rotation={[-Math.PI * 0.5, 0, 0]}
            receiveShadow
          >
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#white" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
