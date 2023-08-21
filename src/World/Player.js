import {
  CapsuleGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  Vector3,
} from "three";
import { camera, scene } from "./World";
import { useSpherePhysics } from "./Physics/MeshPhysics";
import { PHYSICS_WORLD } from "../main";

export let container, model, playerPhysics;
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
  playerPhysics = useSpherePhysics(0.4);
  playerPhysics.position.set(0, 0.404, 0);
  PHYSICS_WORLD.addBody(playerPhysics);

  scene.add(container);
};
