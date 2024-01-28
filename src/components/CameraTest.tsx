import StudioExample from "./StudioExample";
import { useFrame } from "@react-three/fiber";
import { CubeCamera } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { MutableRefObject } from "react";

const CameraTest = () => {
  const ref = useRef(null) as MutableRefObject<any>;

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });

  return (
    <>
      <StudioExample />

      <CubeCamera resolution={1024}>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              // color="tomato"
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      <mesh position={[0, 0, -5]} ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="tomato" />
      </mesh>
    </>
  );
};

export default forwardRef(CameraTest);
