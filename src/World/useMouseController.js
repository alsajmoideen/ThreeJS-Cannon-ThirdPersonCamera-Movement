import { Spherical, Vector3 } from "three";
import { container } from "./Player";
import { camera } from "./World";
import { mousedown } from "./EventListner";

const cameraOrigin = new Vector3(0, 0.6, 0);
export const CameraViewControl = (e) => {
    if (mousedown) {
        const { movementX, movementY } = e;
  
        const offset = new Spherical().setFromVector3(
          camera.position.clone().sub(cameraOrigin)
        );
  
        const phi = offset.phi - movementY * 0.02;
  
        offset.theta -= movementX * 0.02;
        offset.phi = Math.max(0.01, Math.min(0.55 * Math.PI, phi));
        camera.position.copy(
          cameraOrigin.clone().add(new Vector3().setFromSpherical(offset))
        );
        camera.lookAt(container.position.clone().add(cameraOrigin));
      }
};