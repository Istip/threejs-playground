import * as THREE from "three";
import { CameraControls, Grid } from "@react-three/drei";
import { MutableRefObject, useRef } from "react";
import { buttonGroup, useControls } from "leva";

const CameraController = () => {
  const ref = useRef<CameraControls>(null) as MutableRefObject<CameraControls>;

  const { DEG2RAD } = THREE.MathUtils;

  useControls("Camera controls", {
    horizontalRotation: buttonGroup({
      label: "Horizontal rotation",
      opts: {
        "45deg": () => ref.current?.rotate(45 * DEG2RAD, 0, true),
        "-90deg": () => ref.current?.rotate(-90 * DEG2RAD, 0, true),
        "360deg": () => ref.current?.rotate(360 * DEG2RAD, 0, true),
      },
    }),
    verticalRotation: buttonGroup({
      label: "Vertical rotation",
      opts: {
        "20deg": () => ref.current?.rotate(0, 20 * DEG2RAD, true),
        "-40deg": () => ref.current?.rotate(0, -40 * DEG2RAD, true),
      },
    }),
    truckGroup: buttonGroup({
      label: "Truck right",
      opts: {
        "(1,0)": () => ref.current?.truck(1, 0, true),
        "(0,1)": () => ref.current?.truck(0, 1, true),
        "(-1,-1)": () => ref.current?.truck(-1, -1, true),
      },
    }),
    zoomGroup: buttonGroup({
      label: "Zoom",
      opts: {
        "0.25": () => ref.current?.zoom(0.25, true),
        "-0.25": () => ref.current?.zoom(-0.25, true),
      },
    }),
  });

  return (
    <>
      <CameraControls ref={ref} />

      <Grid
        args={[32, 32]}
        // cells are the subgrids
        cellSize={0.25}
        cellColor="#00ff00"
        // sections are the bigger grids
        sectionColor="lime"
        sectionThickness={1}
        // fade is the distance at which the grid fades out
        fadeDistance={10}
        fadeStrength={2}
        side={THREE.DoubleSide}
      />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="lime" />
      </mesh>
    </>
  );
};

export default CameraController;
