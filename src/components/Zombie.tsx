import { useGLTF } from "@react-three/drei";

const ZombieCar = (props: any) => {
  const { nodes, materials } = useGLTF("./model/zombie.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.1}>
        <mesh
          geometry={(nodes.Cylinder018_Cylinder007 as any).geometry}
          material={materials.Car}
        />
        <mesh
          geometry={(nodes.Cylinder018_Cylinder007_1 as any).geometry}
          material={materials.Windshield}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./model/zombie.gltf");

export default ZombieCar;
