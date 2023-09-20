const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw81(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(false);
}

module.exports = {
  draw81
}
