const {LETTER_HEIGHT} = require("../../../constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw68(startX, startY) {
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
  const start = Math.PI * 1.5;
  const end = Math.PI * 2.5;
  drawCircle({
    start,
    end,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(startX, startY + LETTER_HEIGHT / 2);
  toggleMouse(false)
  drawCircle({
    start,
    end,
    startX,
    startY,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true)
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw68
}
