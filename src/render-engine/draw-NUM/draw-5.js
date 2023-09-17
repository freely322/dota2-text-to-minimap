const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/common");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/robot");
const {drawCircle} = require("../helpers");

function draw5(startX, startY) {
  moveMouseFast(startX + LETTER_WIDTH, startY);
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH / 5, startY);
  moveMouse(startX, startY + LETTER_HEIGHT / 2);
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
  draw5
}
