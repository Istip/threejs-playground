import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image, useScroll } from "@react-three/drei";

const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  const ref = useRef(null as any);

  const scroll = useScroll();

  useFrame(() => {
    ref.current.children[0].material.zoom = 1 + scroll.range(0, 0.33) / 3;
    ref.current.children[1].material.zoom = 1 + scroll.range(0.33, 0.33);
    ref.current.children[2].material.zoom = 1 + scroll.range(0.33, 0.33);
    ref.current.children[3].material.zoom = 1 + scroll.range(0.33, 0.33);
  });

  return (
    <group ref={ref}>
      <Image
        url="/images/1.jpg"
        scale={[4, height]}
        position={[-2, 0, 0]}
        zoom={2}
      />

      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3]}
        url="./images/2.jpg"
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2]}
        url="./images/3.jpg"
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="./images/4.jpg" />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3]}
        url="./images/5.jpg"
        grayscale={1}
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2]}
        url="./images/6.jpg"
      />
    </group>
  );
};

export default Images;
