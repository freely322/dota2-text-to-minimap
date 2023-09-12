const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT, CURVE_QUALITY} = require("../constants");

function drawYou(startX, startY) {
  const j = LETTER_WIDTH / 2;
  const k = LETTER_HEIGHT / 4;
  const r = LETTER_WIDTH / 2;
  const computeX = (theta, r, j, k, offset) => { return offset + (r * Math.cos(theta) + j) }
  const computeY = (theta, r, j, k, offset) => { return offset + (r * Math.sin(theta) + k) }
  const start = Math.PI;
  robot.dragMouse(
    computeX(Math.PI, r, j, k, startX + LETTER_WIDTH * 0.2),
    computeY(Math.PI, r, j, k, startY)
  );
  robot.mouseToggle('down');
  let x = startX + LETTER_WIDTH * 0.2;
  let y = startY;
  for(let theta = start; theta <= (Math.PI * 2); theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX + LETTER_WIDTH * 0.2)
    y = computeY(theta, r, j, k, startY)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(
    computeX(Math.PI * 2, r, j, k, startX + LETTER_WIDTH * 0.2),
    computeY(Math.PI * 2, r, j, k, startY + LETTER_HEIGHT / 2)
  );
  for(let theta = Math.PI * 2; theta <= Math.PI * 3; theta += CURVE_QUALITY) {
    x = computeX(theta, r, j, k, startX + LETTER_WIDTH * 0.2)
    y = computeY(theta, r, j, k, startY + LETTER_HALF_HEIGHT)
    robot.dragMouse(x, y);
  }
  robot.dragMouse(
    computeX(Math.PI, r, j, k, startX + LETTER_WIDTH * 0.2),
    computeY(Math.PI, r, j, k, startY)
  );
  robot.mouseToggle('up');
  robot.dragMouse(startX - LETTER_WIDTH * 0.2, startY)
  robot.mouseToggle('down');
  robot.dragMouse(startX - LETTER_WIDTH * 0.2, startY + LETTER_HEIGHT)
  robot.mouseToggle('up');
  robot.dragMouse(startX - LETTER_WIDTH * 0.2,  startY + LETTER_HEIGHT / 2)
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH * 0.2, startY + LETTER_HEIGHT / 2)
  robot.mouseToggle('up');
}

module.exports = {
  drawYou
}
