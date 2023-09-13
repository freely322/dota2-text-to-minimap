const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw76(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH / 5, startY);
  toggleMouse(true);
  moveMouse(startX + (LETTER_WIDTH - (LETTER_WIDTH / 5)), startY);
  moveMouse(startX + (LETTER_WIDTH - (LETTER_WIDTH / 5)), startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT * 1.2);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT * 1.2);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH / 5, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH / 5, startY);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw76
}
