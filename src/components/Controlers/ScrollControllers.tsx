import { Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import Images from "./Images";

const ScrollControllers = () => {
  const model = useGLTF("/model/table.gltf");

  return (
    <>
      <ambientLight intensity={10} />
      <directionalLight />

      <ScrollControls pages={3} damping={0.15} infinite>
        <Scroll>
          <Images />
          <primitive object={model.scene} position={[1.5, -1, 0]} scale={0.5} />
        </Scroll>

        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>
        </Scroll>
        <meshStandardMaterial />
      </ScrollControls>
    </>
  );
};

useGLTF.preload("/model/table.gltf");

export default ScrollControllers;
