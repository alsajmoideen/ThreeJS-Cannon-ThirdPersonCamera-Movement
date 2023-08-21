import { Body, Box, Sphere, Vec3 } from "cannon-es";

// Plane Physics
export const usePlanePhysics = (width, breadth) => {
  const halfExtents = new Vec3(width / 2, 0.005, breadth / 2);
  const boxShape = new Box(halfExtents);

  const planePhysics = new Body({
    shape: boxShape,
    type: Body.STATIC,
  });
  planePhysics.linearDamping = 0.3;
  return planePhysics;
};

// Cube Physics
export const useCubePhysics = (width, hight, depth, mass) => {
  const halfExtents = new Vec3(width / 2, hight / 2, depth / 2);
  const boxShape = new Box(halfExtents);

  const cubePhysics = new Body({
    shape: boxShape,
    type: Body.DYNAMIC,
    mass: mass,
  });
  return cubePhysics;
};

// Sphere Physics
export const useSpherePhysics = (radius) => {
  const sphereShape = new Sphere(radius);
  const spherePhysics = new Body({
    mass: 10,
    shape: sphereShape,
  });
  return spherePhysics;
};
