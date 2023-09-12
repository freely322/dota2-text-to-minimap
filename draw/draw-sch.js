const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawSch(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH * 0.9, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH * 0.9, startY);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH * 0.9, startY + LETTER_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT * 1.2);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH / 2.2, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 2.2, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawSch
}
