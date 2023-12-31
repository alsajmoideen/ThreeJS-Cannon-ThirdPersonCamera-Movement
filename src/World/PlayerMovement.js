import { Vector3 } from "three";
import { container, model, playerPhysics } from "./Player";
import { camera } from "./World";
import { movingBackward, movingForward } from "./useKeyboard";

const cameraOrigin = new Vector3(0, 0.6, 0);
const xAxis = new Vector3(1, 0, 0);
const tempCameraVector = new Vector3();
const tempModelVector = new Vector3();
export const PlayerMovement = () => {
  if (movingForward || movingBackward) {
    // Get the X-Z plane in which camera is looking to move the player
    camera.getWorldDirection(tempCameraVector);
    const cameraDirection = tempCameraVector.setY(0).normalize();

    // Get the X-Z plane in which player is looking to compare with camera
    model.getWorldDirection(tempModelVector);
    const playerDirection = tempModelVector.setY(0).normalize();

    // Get the angle to x-axis. z component is used to compare if the angle is clockwise or anticlockwise since angleTo returns a positive value
    const cameraAngle =
      cameraDirection.angleTo(xAxis) * (cameraDirection.z > 0 ? 1 : -1);
    const playerAngle =
      playerDirection.angleTo(xAxis) * (playerDirection.z > 0 ? 1 : -1);

    // Get the angle to rotate the player to face the camera. Clockwise positive
    const angleToRotate = playerAngle - cameraAngle;

    // Get the shortest angle from clockwise angle to ensure the player always rotates the shortest angle
    let sanitisedAngle = angleToRotate;
    if (angleToRotate > Math.PI) {
      sanitisedAngle = angleToRotate - 2 * Math.PI;
    }
    if (angleToRotate < -Math.PI) {
      sanitisedAngle = angleToRotate + 2 * Math.PI;
    }

    // Rotate the model by a tiny value towards the camera direction

    let WalkSpeed = 3;
    let WalkBackSpeed = -2;
    if (movingForward) {
      playerPhysics.velocity.set(
        cameraDirection.x * WalkSpeed,
        cameraDirection.y * WalkSpeed,
        cameraDirection.z * WalkSpeed
      );
      container.position.copy(playerPhysics.position);
    } else if (movingBackward) {
      playerPhysics.velocity.set(
        cameraDirection.x * WalkBackSpeed,
        cameraDirection.y * WalkBackSpeed,
        cameraDirection.z * WalkBackSpeed
      );
      container.position.copy(playerPhysics.position);
    }

    camera.lookAt(container.position.clone().add(cameraOrigin));
  }else {
    playerPhysics.velocity.set(0, 0, 0);
    playerPhysics.angularDamping = 0;
  }
};
