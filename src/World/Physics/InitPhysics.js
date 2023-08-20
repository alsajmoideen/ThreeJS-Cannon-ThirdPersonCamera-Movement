import { Vec3, World } from "cannon-es";

export const WorldPhysics = () => {
  const world = new World({
    gravity: new Vec3(0, -9.8, 0),
  });
  return world;
};
