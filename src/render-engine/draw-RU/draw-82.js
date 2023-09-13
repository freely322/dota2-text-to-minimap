const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");

function draw82(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw82
}
