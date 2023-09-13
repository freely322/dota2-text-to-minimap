const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");

function draw87(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH * 0.9, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH * 0.9, startY);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH * 0.9, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT * 1.2);
  toggleMouse(false);
}

module.exports = {
  draw87
}
