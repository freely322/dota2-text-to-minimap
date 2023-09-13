const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw188(startX, startY) {
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
  moveMouseFast(startX, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY);
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
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true)
  moveMouse(startX, startY + LETTER_HEIGHT);
  toggleMouse(false);
}

module.exports = {
  draw188
}
