const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/robot");

function draw89(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 2);
  toggleMouse(false);
}

module.exports = {
  draw89
}
