const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");

function draw66(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw66
}
