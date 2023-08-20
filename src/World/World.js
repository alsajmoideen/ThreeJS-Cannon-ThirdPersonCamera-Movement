import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";

// Scene
const scene = new Scene();
scene.background = new Color(0xffffff);

// Camere
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export { scene, camera, renderer };
