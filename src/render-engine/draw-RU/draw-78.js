const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw78(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
}

module.exports = {
  draw78
}
