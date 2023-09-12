const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawG(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.mouseToggle('up');
  robot.mouseToggle('up');
}

module.exports = {
  drawG
}
