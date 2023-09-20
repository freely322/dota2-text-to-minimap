const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw186(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT / 2);
  moveMouse(startX + ((LETTER_WIDTH / 4) * 3), startY + LETTER_HEIGHT / 2);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH, startY);
  toggleMouse(true);
  moveMouse(startX + ((LETTER_WIDTH / 4) * 3), startY + LETTER_HEIGHT / 2);
  moveMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT / 2);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw186
}
