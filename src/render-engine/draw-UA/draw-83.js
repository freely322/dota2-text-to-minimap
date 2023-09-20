const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw83(startX, startY) {
  moveMouseFast(startX + (LETTER_WIDTH / 4) * 3, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 4, startY);
  moveMouse(startX + LETTER_WIDTH / 2, startY);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  moveMouse(startX + (LETTER_WIDTH / 4) * 3, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw83
}
