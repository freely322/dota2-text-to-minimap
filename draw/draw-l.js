const robot = require("@jitsi/robotjs");
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawL(startX, startY) {
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY);
  robot.mouseToggle('down');
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY);
  robot.mouseToggle('up');
}

module.exports = {
  drawL
}
