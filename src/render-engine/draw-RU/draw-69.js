const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");

function draw69(startX, startY) {
  moveMouseFast(startX, startY + LETTER_HEIGHT);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX, startY);
  toggleMouse(false);
}

module.exports = {
  draw69
}
