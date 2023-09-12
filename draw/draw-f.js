const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, CURVE_QUALITY} = require("../constants");

function drawF(startX, startY) {
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 1.5;
  const start = Math.PI * 1.5;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(
    computeX(start, r, j, k, startX),
    computeY(start, r, j, k, startY + LETTER_HEIGHT / 4)
  );
  robot.mouseToggle('down');
  let x = startX;
  let y = startY;
  for(let theta = start; theta <= (Math.PI * 4); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX)
    y = computeY(theta, r, j, k, startY + LETTER_HEIGHT / 4)
    robot.dragMouse(x, y);
  }
  robot.mouseToggle('up');
}

module.exports = {
  drawF
}
