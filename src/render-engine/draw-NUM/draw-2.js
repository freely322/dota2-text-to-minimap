const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw2(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(startX, startY + LETTER_HEIGHT);
  moveMouse(startX + LETTER_WIDTH, startY + LETTER_HEIGHT);
  toggleMouse(false)
}

module.exports = {
  draw2
}
