const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH, LETTER_HALF_HEIGHT} = require("../constants");

function drawN(startX, startY) {
  robot.moveMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY + LETTER_HALF_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HALF_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawN
}
