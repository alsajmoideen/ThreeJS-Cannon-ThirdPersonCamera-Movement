import { PHYSICS_WORLD } from "../main";
import { useCube, usePlane } from "./Mesh/Mesh";

import { useCubePhysics, usePlanePhysics } from "./Physics/MeshPhysics";
import { scene } from "./World";

export let Cube = [],
  CubePhysics = [];
export let PlaneMesh, PlanePhysics;

export const WorldMeshes = () => {
  let plane = usePlane(100, 100, 0x37a77c);
  scene.add(plane);
  PlaneMesh = plane;

  let planePhysics = usePlanePhysics(100, 100);
  PHYSICS_WORLD.addBody(planePhysics);
  PlanePhysics = planePhysics;

  for (let i = 0; i < 10; i++) {
    let cube = useCube(1, 1, 1, 0xc8b935);
    Cube.push(cube);
    scene.add(cube);
  }

  for (let i = 0; i < 10; i++) {
    let cubePhysics = useCubePhysics(1, 1, 1, 3);
    cubePhysics.position.set(
      Math.random() * 10 + 2,
      Math.random() * 10 + 2,
      Math.random() * 10 + 2
    );
    CubePhysics.push(cubePhysics);
    PHYSICS_WORLD.addBody(cubePhysics);
  }
};
