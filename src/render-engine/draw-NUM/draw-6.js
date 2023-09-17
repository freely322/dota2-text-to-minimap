const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw6(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 3,
    startX,
    startY,
    r: LETTER_WIDTH / 3 * 2,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true);
  moveMouse(startX, startY + LETTER_HEIGHT / 4);
  toggleMouse(false)
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2,
    startX,
    startY
  })
  toggleMouse(false);
}

module.exports = {
  draw6
}
