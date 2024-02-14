import * as THREE from "three";
import {
  CameraControls,
  Float,
  Html,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { useRef, useState } from "react";

const Texts = () => {
  const ref = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <OrbitControls />
      <CameraControls />

      <ambientLight />
      <directionalLight position={[-2, -2, 5]} intensity={1} />

      <Float floatIntensity={3} speed={3}>
        <Text
          scale={2}
          fontSize={0.4}
          font="/fonts/rethink-bold.ttf"
          color="#ffffff"
          maxWidth={1.5}
          textAlign="center"
          lineHeight={0.75}
          letterSpacing={-0.05}
        >
          novanoir
          <meshStandardMaterial side={THREE.DoubleSide} />
        </Text>
      </Float>

      <Float floatIntensity={4} speed={1}>
        <mesh scale={1.5} position={[0.5, 0.5, -0.5]}>
          <planeGeometry />
          <meshStandardMaterial side={THREE.DoubleSide} color="red" />
        </mesh>
      </Float>

      <Float>
        <mesh
          position={[1.25, 1.25, 0.5]}
          ref={ref}
          onPointerDown={() => setClicked(!clicked)}
          scale={clicked ? 0.7 : 1}
          onPointerEnter={() => setShowButton(true)}
          onPointerLeave={() => setShowButton(false)}
        >
          <dodecahedronGeometry />
          <meshStandardMaterial color="orange" />

          {showButton && (
            <Html
              position={[-0.7, 0.75, 0.5]}
              wrapperClass="text"
              distanceFactor={5}
              // hide behind other objects
              occlude={[ref]}
              style={{
                cursor: "pointer",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Click below
            </Html>
          )}
        </mesh>

        <mesh position={[-1.75, 0, -1]} rotation={[-3, -5, 8]}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="tomato" />
        </mesh>
      </Float>
    </>
  );
};

export default Texts;
