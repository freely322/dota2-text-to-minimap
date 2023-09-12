const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT, CURVE_QUALITY} = require("../constants");

function drawHard(startX, startY) {
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 2;
  const start = Math.PI * 1.5;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX - LETTER_WIDTH * 0.4, startY);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY + LETTER_HALF_HEIGHT);
  robot.mouseToggle('down');
  let x = startX;  // This is the initial X position
  let y = startY;  // This is the initial Y position
  for(let theta = start; theta <= (Math.PI * 2.5); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY + LETTER_HALF_HEIGHT)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawHard
}
