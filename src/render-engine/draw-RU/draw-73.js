const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");

function draw73(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw73
}
