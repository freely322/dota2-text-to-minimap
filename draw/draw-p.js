const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawP(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawP
}
