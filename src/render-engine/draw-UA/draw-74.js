const {LETTER_HEIGHT} = require("../../constants/common");
const {toggleMouse, moveMouse} = require("../../utils/robot");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw74(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(
    computeX({theta: Math.PI * 2, offset: startX }),
    computeY({theta: Math.PI * 2, offset: startY + LETTER_HEIGHT / 2 })
  );
  toggleMouse(false)
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
  );
  toggleMouse(false);
}

module.exports = {
  draw74
}
