const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");

function draw86(startX, startY) {
  moveMouseFast(startX, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 4, startY);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH - LETTER_WIDTH / 4, startY);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw86
}
