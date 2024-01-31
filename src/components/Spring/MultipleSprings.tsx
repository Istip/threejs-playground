import { a, useSprings } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

interface ItemProps {
  position: Vector3 | undefined; // Change type to Vector3
}

const items: ItemProps[] = [
  { position: new Vector3(-1.5, 0, 0) },
  { position: new Vector3(0, 0, 0) },
  { position: new Vector3(1.5, 0, 0) },
];

const MultipleSprings = () => {
  const springs = useSprings(
    items.length,
    // items.map((item) => ({
    //   position: item.position,
    //   config: { mass: 20, tension: 170, friction: 30 },
    // }))
    [
      {
        from: { position: new Vector3(-3.5, 0, 0) },
        to: { position: new Vector3(-1.5, 0, 0) },
      },
      {
        from: { position: new Vector3(0, 3.5, 0) },
        to: { position: new Vector3(0, 0, 0) },
      },
      {
        from: { position: new Vector3(3.5, 0, 0) },
        to: { position: new Vector3(1.5, 0, 0) },
      },
    ]
  );

  console.log("✅  springs:", springs);

  return (
    <>
      <OrbitControls />
      <ambientLight />

      {springs.map((item, index) => (
        <a.mesh key={index} position={item.position} scale={0.5}>
          <boxGeometry />
          <meshStandardMaterial color="tomato" />
        </a.mesh>
      ))}
    </>
  );
};

export default MultipleSprings;
