const robot = require("@jitsi/robotjs");
const {LETTER_HEIGHT, LETTER_WIDTH} = require("../constants");

function drawM(startX, startY) {
  robot.dragMouse(startX, startY + LETTER_HEIGHT);
  robot.mouseToggle('down');
  robot.dragMouse(startX + LETTER_WIDTH / 4, startY);
  robot.dragMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  robot.dragMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY);
  robot.dragMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  robot.mouseToggle('up');
}

module.exports = {
  drawM
}
