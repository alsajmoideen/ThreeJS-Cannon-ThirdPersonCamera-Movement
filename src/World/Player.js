import { CapsuleGeometry, Group, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { camera, scene } from "./World";

export let container,model;
const cameraOrigin = new Vector3(0, 0.6, 0);
export const LocalPlayer = () => {
  //   Container and Camera
  container = new Group();

  //   Player position
  container.position.set(0, 0.5, 0);
  camera.position.set(0, 1.3, -2.5);
  camera.lookAt(cameraOrigin);

  const capsuleGeometry = new CapsuleGeometry(0.2, 0.4, 4, 8);
  const capsuleMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
  const capsule = new Mesh(capsuleGeometry, capsuleMaterial);
  model = capsule;

  container.add(camera);
  container.add(capsule);

  scene.add(container);
};
