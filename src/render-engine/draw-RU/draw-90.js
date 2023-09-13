const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle} = require("../helpers");

function draw90(startX, startY) {
  drawCircle({
    start: Math.PI * 0.5,
    end: Math.PI * 1.5,
    startX,
    startY
  })
  moveMouseFast(startX + LETTER_WIDTH, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 2);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT / 2);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(false);
}

module.exports = {
  draw90
}
