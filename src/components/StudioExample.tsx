import { Environment, OrbitControls } from "@react-three/drei";

const StudioExample = () => {
  // IMPORTANT:
  // You can visit: https://polyhaven.com/hdris

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const files = [
    "./envMap/px.png",
    "./envMap/nx.png",
    "./envMap/py.png",
    "./envMap/ny.png",
    "./envMap/pz.png",
    "./envMap/nz.png",
  ];

  return (
    <>
      <OrbitControls enableZoom />

      <Environment background files={"./envMap/studio.hdr"} />
    </>
  );
};

export default StudioExample;
