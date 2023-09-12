const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT, CURVE_QUALITY} = require("../constants");

function drawUu(startX, startY) {
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 2;
  const start = Math.PI * 1.5;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  robot.dragMouse(startX - LETTER_WIDTH * 0.1, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX - LETTER_WIDTH * 0.1, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH * 1.2, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX - LETTER_WIDTH * 0.1, startY + LETTER_HALF_HEIGHT);
  robot.mouseToggle('down');
  let x = startX - LETTER_WIDTH * 0.1;  // This is the initial X position
  let y = startY;  // This is the initial Y position
  for(let theta = start; theta <= (Math.PI * 2.5); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY + LETTER_HALF_HEIGHT)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(startX - LETTER_WIDTH * 0.1, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawUu
}
