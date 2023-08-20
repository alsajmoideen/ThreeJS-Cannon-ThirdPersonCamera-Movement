import { Body, Box, Vec3 } from "cannon-es";

// Plane Geometry
export const usePlanePhysics = (width, breadth) => {
  const halfExtents = new Vec3(width/2, 0.005, breadth/2);
  const boxShape = new Box(halfExtents);

  const planePhysics = new Body({
    shape: boxShape,
    type: Body.STATIC,
  });
  planePhysics.linearDamping = 0.3
  return planePhysics;
};

// Cube Geometry
export const useCubePhysics = (width, hight, depth,mass) => {
  const halfExtents = new Vec3(width/2, hight/2, depth/2);
  const boxShape = new Box(halfExtents);

  const planePhysics = new Body({
    shape: boxShape,
    type: Body.DYNAMIC,
    mass: mass,
  });
  return planePhysics;
};
