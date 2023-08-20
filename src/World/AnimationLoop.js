import { PHYSICS_WORLD, cannonDebugger } from "../main";
import { PhysicsLoop } from "./Physics/PhysicsLoop";
import { PlayerMovement } from "./PlayerMovement";
import { camera, renderer, scene } from "./World";

const timeStep = 1 / 60;
function animate() {
  PHYSICS_WORLD.step(timeStep);
  cannonDebugger.update();

  PlayerMovement();
  PhysicsLoop();

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export { animate };
