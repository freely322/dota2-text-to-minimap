const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw80(startX, startY) {
  const start = Math.PI * 1.5;
  drawCircle({
    start,
    end: Math.PI * 2.5,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH / 3, startY + LETTER_HEIGHT / 2);
  toggleMouse(false)
  drawCircle({
    start,
    end: Math.PI * 3,
    startX,
    startY,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(false);
}

module.exports = {
  draw80
}
