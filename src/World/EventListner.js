import { camera, renderer } from "./World";
import { KeyDown, KeyUp } from "./useKeyboard";
import { CameraViewControl } from "./useMouseController";

export let mousedown = false;
// Window resize event listener
export const EventListener = () => {
   // Key Down Event
   window.addEventListener("keydown", (e) => {
    const { keyCode } = e;
    KeyDown(keyCode);
  });

  // Key Up Event
  window.addEventListener("keyup", (e) => {
    const { keyCode } = e;
    KeyUp(keyCode);
  });

  // Pointer Down Event
  window.addEventListener("pointerdown", (e) => {
    mousedown = true;
  });

  // Pointer Up Event
  window.addEventListener("pointerup", (e) => {
    mousedown = false;
  });

   // Pointer Move Event
   window.addEventListener("pointermove", (e) => {
    CameraViewControl(e);
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};
