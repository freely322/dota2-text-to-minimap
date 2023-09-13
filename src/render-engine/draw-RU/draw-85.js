const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");

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
