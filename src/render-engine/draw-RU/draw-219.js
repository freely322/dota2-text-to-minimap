const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");

function draw219(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
}

module.exports = {
  draw219
}
