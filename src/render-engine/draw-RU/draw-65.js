const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../../constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle} = require("../helpers");

function draw65(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH / 2, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT);
  toggleMouse(false);
  drawCircle({
    start: Math.PI * 1.5,
    end: Math.PI * 4,
    startX,
    startY,
    r: LETTER_WIDTH / 1.5,
    offsetY: startY + LETTER_HEIGHT / 4
  })
  toggleMouse(false);
}

module.exports = {
  draw65
}
