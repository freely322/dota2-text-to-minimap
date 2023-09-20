const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw221(startX, startY) {
  moveMouseFast(startX + (LETTER_WIDTH / 4) * 3, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 4, startY);
  moveMouse(startX + LETTER_WIDTH / 2, startY);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  moveMouse(startX + (LETTER_WIDTH / 4) * 3, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.1);
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 3, startY - LETTER_HEIGHT * 0.1);
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 3, startY - LETTER_HEIGHT * 0.2);
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.1);
  moveMouse(startX + LETTER_WIDTH / 3, startY - LETTER_HEIGHT * 0.1);
  moveMouse(startX + LETTER_WIDTH / 3, startY - LETTER_HEIGHT * 0.2);
  moveMouse(startX + LETTER_WIDTH / 4, startY - LETTER_HEIGHT * 0.2);
  toggleMouse(false);
}
module.exports = {
  draw221
}
