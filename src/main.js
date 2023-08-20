import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { camera, renderer, scene } from "./World/World";
import { EventListener } from "./World/EventListner";
import { animate } from "./World/AnimationLoop";
import { WorldMeshes } from "./World/WorldMeshes";
import { WorldPhysics } from "./World/Physics/InitPhysics";
import CannonDebugger from "cannon-es-debugger";
import { CameraViewControl } from "./World/useMouseController";
import { LocalPlayer } from "./World/Player";

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.maxPolarAngle = Math.PI / 2.1;
// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(30, 50, 10);
scene.add(directionalLight);

// Init Physics
export const PHYSICS_WORLD = WorldPhysics();
export const cannonDebugger = new CannonDebugger(scene, PHYSICS_WORLD, {
  color: new THREE.Color(0x000000),
  scale: 1,
});
LocalPlayer();
// Meshes Inside a World
WorldMeshes();

animate();

EventListener();
