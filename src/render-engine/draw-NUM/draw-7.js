const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");

function draw7(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  moveMouse(startX + LETTER_WIDTH / 3, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw7
}
