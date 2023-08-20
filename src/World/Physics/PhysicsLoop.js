import { Cube, CubePhysics, PlaneMesh, PlanePhysics } from "../WorldMeshes";

export const PhysicsLoop = () => {
  PlaneMesh.position.copy(PlanePhysics.position);
  PlaneMesh.quaternion.copy(PlanePhysics.quaternion);

  for (let i = 0; i < CubePhysics.length; i++) {
    Cube[i].position.copy(CubePhysics[i].position);
    Cube[i].quaternion.copy(CubePhysics[i].quaternion);
  }
};
