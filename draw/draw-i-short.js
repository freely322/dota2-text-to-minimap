const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawIShort(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  robot.mouseToggle('up');
}

module.exports = {
  drawIShort
}
