const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw85(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
}

module.exports = {
  draw85
}
