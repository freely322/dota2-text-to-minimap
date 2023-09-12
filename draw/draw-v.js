const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT, CURVE_QUALITY} = require("../constants");

function drawV(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 2;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  const start = Math.PI * 1.5;
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  let x = startX;
  let y = startY;
  for(let theta = start; theta <= (Math.PI * 2.5); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(startX, startY + LETTER_HALF_HEIGHT);
  for(let theta = start; theta <= (Math.PI * 2.5); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY + LETTER_HALF_HEIGHT)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawV
}
