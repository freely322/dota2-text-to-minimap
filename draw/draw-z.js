const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT, CURVE_QUALITY} = require("../constants");

function drawZ(startX, startY) {
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 2;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  const start = Math.PI * 1.5;
  robot.dragMouse(computeX(Math.PI * 1.25, r, j, k, startX), computeY(Math.PI * 1.25, r, j, k, startY));
  robot.mouseToggle('down');
  // Starting point
  let x = startX;  // This is the initial X position
  let y = startY;  // This is the initial Y position
  for(let theta = Math.PI * 1.25; theta <= (Math.PI * 2.5); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(startX + LETTER_WIDTH / 3, startY + LETTER_HALF_HEIGHT);
  for(let theta = start; theta <= (Math.PI * 3); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY + LETTER_HALF_HEIGHT)
    robot.dragMouse(x, y);
  }
  robot.mouseToggle('up');
}

module.exports = {
  drawZ
}
