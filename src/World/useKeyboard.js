

export let movingForward = false,
  movingBackward = false;
let isMoving = false;

export const KeyDown = (keyCode) => {
  switch (keyCode) {
    case 87:
      if (!movingForward && !isMoving) {
        movingForward = true; // Forward Moving
        isMoving = true;
      }
      break;
    case 83:
      if (!movingBackward && !isMoving) {
        movingBackward = true; // Backward Moving
        isMoving = true;
      }
      break;
    default:
      break;
  }
};

export const KeyUp = (keyCode) => {
  switch (keyCode) {
    case 87:
      if (movingForward) {
        movingForward = false;
        isMoving = false;
      }
      break;
    case 83:
      if (movingBackward) {
        movingBackward = false;
        isMoving = false;
      }
      break;
    default:
      break;
  }
};