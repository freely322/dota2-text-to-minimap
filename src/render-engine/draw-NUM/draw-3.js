const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw3(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2.5,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH / 3, startY + LETTER_HEIGHT / 2);
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 1.5,
    end: Math.PI * 3,
    startX,
    startY,
    r: LETTER_WIDTH / 5 * 3,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(false);
}

module.exports = {
  draw3
}
