const {LETTER_HEIGHT, LETTER_WIDTH} = require("../../constants/constants");
const {moveMouseFast, toggleMouse, moveMouse} = require("../../utils/input-puppeteer");
const {drawCircle, computeX, computeY} = require("../helpers");

function draw190(startX, startY) {
  const j = LETTER_WIDTH / 2 + LETTER_WIDTH * 0.2;
  drawCircle({
    start: Math.PI,
    end: Math.PI * 2,
    startX,
    startY,
    j
  })
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI * 2, j, offset: startX }),
    computeY({ theta: Math.PI * 2, j, offset: startY + LETTER_HEIGHT / 2 })
  );
  toggleMouse(false)
  drawCircle({
    start: Math.PI * 2,
    end: Math.PI * 3,
    startX,
    startY,
    j,
    offsetY: startY + LETTER_HEIGHT / 2
  })
  toggleMouse(true)
  moveMouse(
    computeX({ theta: Math.PI, j, offset: startX }),
    computeY({ theta: Math.PI, j, offset: startY })
  );
  toggleMouse(false);
  moveMouseFast(startX - LETTER_WIDTH * 0.2, startY)
  toggleMouse(true);
  moveMouse(startX - LETTER_WIDTH * 0.2, startY + LETTER_HEIGHT)
  toggleMouse(false);
  moveMouseFast(startX - LETTER_WIDTH * 0.2,  startY + LETTER_HEIGHT / 2)
  toggleMouse(true);
  moveMouse(startX + LETTER_WIDTH * 0.2, startY + LETTER_HEIGHT / 2)
  toggleMouse(false);
}

module.exports = {
  draw190
}
