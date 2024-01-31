import { a, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
// import { useState } from "react";

const SpringBox = () => {
  // const [active, setActive] = useState(false);

  // const { scale, color } = useSpring({
  //   from: { scale: active ? 1 : 1, color: active ? "tomato" : "yellow" },
  //   to: { scale: active ? 2 : 1, color: active ? "yellow" : "tomato" },
  // });

  // const clickHandler = () => {
  //   setActive(!active);
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const AnimatedCube = () => {
  //   return (
  //     <>
  //       <ambientLight />
  //       <OrbitControls />

  //       <a.mesh
  //         onPointerEnter={clickHandler}
  //         onPointerLeave={clickHandler}
  //         scale={scale}
  //       >
  //         <boxGeometry />
  //         <a.meshStandardMaterial color={color} />
  //       </a.mesh>
  //     </>
  //   );
  // };

  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      to: { x: spring.x.get() === 1 ? 0 : 1 },
    });
  };

  return (
    <>
      <ambientLight />
      <OrbitControls />

      <a.mesh onClick={handleClick} position-x={spring.x}>
        <boxGeometry />
        <a.meshStandardMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default SpringBox;
