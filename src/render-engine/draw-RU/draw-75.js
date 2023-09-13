const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");

function draw75(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(false);
}

module.exports = {
  draw75
}
