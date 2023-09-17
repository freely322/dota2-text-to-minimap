const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw9(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 3,
    startX,
    startY,
  })
  moveMouseFast(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 4);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 4 * 3);
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 2,
    end: Math.PI * 3,
    startX,
    startY,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(false);
}

module.exports = {
  draw9
}
