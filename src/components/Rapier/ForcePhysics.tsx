import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const ForcePhysics = () => {
  const ref = useRef(null as any);
  const refTwo = useRef(null as any);

  const cubeClickHandler = () => {
    ref.current?.applyImpulse({ x: -100, y: 0, z: 0 });
  };

  const cubeClickHandler2 = () => {
    refTwo.current?.applyImpulse({ x: 5, y: 0, z: 0 });
  };

  return (
    <>
      <Sky sunPosition={[0, 0, 15]} />
      <Physics>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 1]} intensity={10} color="red" />
        <pointLight position={[0, 0, 2]} intensity={10} color="yellow" />
        <pointLight position={[5, 0, 5]} intensity={50} color="orange" />
        <RigidBody
          ref={ref}
          // how much percent of gravity should be applied to this object
          // here means -9.81 * 0.9
          gravityScale={0.9}
          // restitution is the bounciness of the object
          restitution={1}
        >
          <mesh scale={2} position={[1.5, 2.5, 0]} onClick={cubeClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </mesh>
        </RigidBody>
        <RigidBody ref={refTwo} restitution={1}>
          <mesh position={[-1.5, 2.5, 0]} onClick={cubeClickHandler2}>
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </mesh>
        </RigidBody>
        {/* BIG SQUARES */}
        <RigidBody
          type="fixed"
          // restitution on fixed elements will make the object bounce forever
          restitution={0.2}
        >
          <mesh position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
            <boxGeometry args={[64, 64, 1]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default ForcePhysics;
