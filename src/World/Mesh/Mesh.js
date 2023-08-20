import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

// Cube Geometry
const useCube = (width, hight, depth, color) => {
  const cubeGeometry = new BoxGeometry(width, hight, depth);
  const cubeMaterial = new MeshBasicMaterial({ color: color });
  const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);
  return cubeMesh;
};

// Plane Geometry
const usePlane = (width, breadth, color) => {
  const planeGeometry = new BoxGeometry(width, 0.01, breadth);
  const planeMaterial = new MeshBasicMaterial({ color: color });
  const planeMesh = new Mesh(planeGeometry, planeMaterial);
  return planeMesh;
};

export { useCube, usePlane };
