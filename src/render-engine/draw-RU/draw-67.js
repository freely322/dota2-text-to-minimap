const {LETTER_HEIGHT} = require("../../../constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw67(startX, startY) {
  const start = Math.PI;
  drawCircle({
    start: Math.PI * 2,
    end: Math.PI * 3,
    startX,
    startY,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI, offset: startX }),
    computeY({ theta: Math.PI, offset: startY })
  )
  toggleMouse(false)
  drawCircle({
    start,
    end: Math.PI * 2,
    startX,
    startY,
  })
  toggleMouse(false);
}

module.exports = {
  draw67
}
