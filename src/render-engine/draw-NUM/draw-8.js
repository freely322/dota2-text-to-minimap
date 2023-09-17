const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw8(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 3,
    startX,
    startY
  })
  drawCircle({
    start: Math.PI,
    end: Math.PI * 3,
    startX,
    startY,
    r: LETTER_WIDTH / 5 * 3,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(false);
}

module.exports = {
  draw8
}
