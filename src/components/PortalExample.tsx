import * as THREE from "three";
import {
  CameraControls,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

//
const PortalExample = () => {
  const [active, setActive] = useState(false);

  const ref = useRef(null) as any;
  const cameraRef = useRef(null) as any;

  const model = useGLTF("./model/egg.glb");
  const texture = useTexture("./texture/1.png");

  const clickHandler = () => {
    setActive(!active);
  };

  useFrame((_, delta) => {
    easing.damp(ref.current, "blend", active ? 1 : 0, 0.2, delta);
  });

  useEffect(() => {
    if (active) {
      cameraRef.current.setLookAt(0, 0, 3, 0, 0, 0, true);
    } else {
      cameraRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <OrbitControls />
      <CameraControls ref={cameraRef} />

      <Text
        font="./fonts/rethink-bold.ttf"
        position={[0, 1.5, 0.1]}
        fontSize={0.6}
      >
        EGGS
        {/* GET THE EXACT WHITE COLOR */}
        <meshBasicMaterial toneMapped={false} />
      </Text>

      <RoundedBox args={[3, 4, 0.1]} radius={0.1} onDoubleClick={clickHandler}>
        <MeshPortalMaterial ref={ref}>
          <primitive object={model.scene} scale={0.6} position={[0, 0.6, 0]} />

          <mesh>
            <sphereGeometry args={[3, 64, 64]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
};

export default PortalExample;
