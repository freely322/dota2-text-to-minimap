const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouse, moveMouseFast} = require("../../utils/robot");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw222(startX, startY) {
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
  moveMouseFast(startX, startY + LETTER_HEIGHT / 2)
  toggleMouse(true)
  moveMouseFast(startX + LETTER_WIDTH / 2, startY + LETTER_HEIGHT / 2)
  toggleMouse(false)
}

module.exports = {
  draw222
}
