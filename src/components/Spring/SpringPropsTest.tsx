import { a, useSpring, useSpringRef } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

// loop: true,
// config: { mass: 20, tension: 170, friction: 30 },

const SpringPropsTest = () => {
  // const [spring, api] = useSpring(() => ({
  //   from: { x: -2 },
  // }));

  const ref = useSpringRef();

  const spring = useSpring({
    ref: ref,
    from: { x: -2 },
  });

  const clickHandler = () => {
    ref.start({
      to: { x: 2 },
      config: { duration: 2000 },
    });
  };

  const pointerOverHandler = () => {
    ref.pause();
  };

  const pointerOutHandler = () => {
    ref.resume();
  };

  console.log("render");

  return (
    <>
      <ambientLight />
      <OrbitControls />

      <a.mesh
        position-x={spring.x}
        onClick={clickHandler}
        onPointerOver={pointerOverHandler}
        onPointerOut={pointerOutHandler}
      >
        <boxGeometry />
        <a.meshStandardMaterial color="red" />
      </a.mesh>
    </>
  );
};

export default SpringPropsTest;
