const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/robot");

function draw192(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH / 2, startY - LETTER_HEIGHT * 0.2)
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH / 3, startY + LETTER_HEIGHT * 0.2)
  toggleMouse(false);
}

module.exports = {
  draw192
}
