const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawU(startX, startY) {
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT / 2);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY);
  robot.mouseToggle('up');
}

module.exports = {
  drawU
}
