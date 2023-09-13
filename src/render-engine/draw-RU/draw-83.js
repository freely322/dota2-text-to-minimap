const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw83(startX, startY) {
  moveMouseFast(startX - LETTER_WIDTH * 0.1, startY);
  toggleMouse(true);
  moveMouse(startX - LETTER_WIDTH * 0.1, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX + LETTER_WIDTH * 1.2, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH * 1.2, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY + LETTER_HEIGHT / 2)
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI * 1.5, offset: startX }),
    computeY({ theta: Math.PI * 1.5, offset: startY + LETTER_HEIGHT / 2 })
  )
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 1.5,
    end: Math.PI * 2.5,
    startX,
    startY,
    j: LETTER_WIDTH / 2 - LETTER_WIDTH * 0.1,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true)
  moveMouse(startX - LETTER_WIDTH * 0.1, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw83
}
