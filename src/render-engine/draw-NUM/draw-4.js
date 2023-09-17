const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw4(startX, startY) {
  moveMouseFast(startX + (LETTER_WIDTH / 4) * 3, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + (LETTER_WIDTH / 4) * 3, startY);
  moveMouse(startX, startY + LETTER_HEIGHT / 2);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 2);
  toggleMouse(false);
}

module.exports = {
  draw4
}
