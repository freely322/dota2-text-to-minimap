const {LETTER_HEIGHT} = require("../../constants/constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw72(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY)
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI * 1.5, offset: startX }),
    computeY({ theta: Math.PI * 1.5, offset: startY })
  )
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 1.5,
    end: Math.PI * 2.5,
    startX,
    startY,
  })
  toggleMouse(true)
  moveMouse(startX, startY + LETTER_HEIGHT / 2);
  toggleMouse(false);
}

module.exports = {
  draw72
}
