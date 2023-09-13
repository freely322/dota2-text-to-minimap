const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {toggleMouse, moveMouseFast, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw222(startX, startY) {
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2,
    startX,
    startY
  })
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI * 2, offset: startX }),
    computeY({ theta: Math.PI * 2, offset: startY + LETTER_HEIGHT / 2 })
  );
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 2,
    end: Math.PI * 3,
    startX,
    startY,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  moveMouseFast(startX + LETTER_WIDTH, startY + LETTER_HEIGHT / 2);
  toggleMouse(true)
  moveMouse(startX + LETTER_WIDTH / 4, startY + LETTER_HEIGHT / 2);
  toggleMouse(false);

}

module.exports = {
  draw222
}
