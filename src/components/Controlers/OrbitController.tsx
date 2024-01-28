import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const OrbitController = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [prevX, setPrevX] = useState<number>(0);
  const [rotationDirection, setRotationDirection] = useState<number>(0);

  // IMPORTANT
  // This component contains a rotation based on mouse x movement

  useFrame((state, delta) => {
    const { x } = state.pointer;

    if (x < prevX) {
      setRotationDirection(x <= prevX ? 1 : -1);
    } else if (x > prevX) {
      setRotationDirection(-1);
    }

    setPrevX(x);

    ref!.current!.rotation.y += delta * 1.1 * rotationDirection; // Update rotation based on direction
  });

  return (
    <>
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        enableZoom={false}
        enablePan={false}
      />

      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />

      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="tomato" />
      </mesh>
    </>
  );
};

export default OrbitController;
