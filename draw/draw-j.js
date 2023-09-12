const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawJ(startX, startY) {
  robot.dragMouse(startX, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT / 2);
  robot.dragMouse(startX + ((LETTER_WIDTH / 4) * 3), startY + LETTER_HEIGHT / 2);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + ((LETTER_WIDTH / 4) * 3), startY + LETTER_HEIGHT / 2);
  robot.dragMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT / 2);
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawJ
}
