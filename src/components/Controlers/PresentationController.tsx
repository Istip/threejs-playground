import { PresentationControls } from "@react-three/drei";

const PresentationController = () => {
  return (
    <>
      <PresentationControls
        polar={[Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        config={{ mass: 2, tenstion: 500 }}
        snap={{ mass: 4, tension: 1500 }}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="orange" />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default PresentationController;
