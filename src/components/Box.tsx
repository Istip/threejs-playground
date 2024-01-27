import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";

const Box = () => {
  const controls = {
    value: { x: 0, y: 0, z: 0 },
    min: -10,
    max: 10,
    step: 1,
  } as const;
  const { position, color, wireframe, scale } = useControls("CUBE", {
    position: controls,
    color: "#e86e4a",
    wireframe: false,
    click: button(() => console.log("Hello!")),
    scale: { options: [1, 2, 3] },
  });

  return (
    <>
      <OrbitControls />
      <mesh
        position={[position.x, position.y, position.z]}
        scale={scale}
        onPointerDown={(event) => console.log("Pointer down", event)}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
    </>
  );
};

export default Box;
