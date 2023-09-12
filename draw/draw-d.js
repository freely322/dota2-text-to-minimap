const robot = require('@jitsi/robotjs');
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawD(startX, startY) {
  robot.dragMouse(startX + LETTER_WIDTH / 5, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX + (LETTER_WIDTH - (LETTER_WIDTH / 5)), startY);
  robot.dragMouse(startX + (LETTER_WIDTH - (LETTER_WIDTH / 5)), startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT * 1.2);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY + LETTER_HEIGHT * 1.2);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH / 5, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH / 5, startY);
  robot.mouseToggle('up');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');

}

module.exports = {
  drawD
}
