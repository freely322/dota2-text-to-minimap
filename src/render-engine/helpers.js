const {LETTER_WIDTH, LETTER_HEIGHT, CURVE_QUALITY} = require("../constants/common");
const {moveMouse, moveMouseFast, toggleMouse} = require("../utils/robot");
const computeX = ({
  theta,
  r = LETTER_WIDTH / 2,
  j = LETTER_WIDTH / 2,
  offset
}) => offset + (r * Math.cos(theta) + j)
const computeY = ({
  theta,
  r = LETTER_WIDTH / 2,
  k = LETTER_HEIGHT / 4,
  offset
}) => offset + (r * Math.sin(theta) + k)

const drawCircle = ({
  start,
  end,
  startX,
  startY,
  j = LETTER_WIDTH / 2,
  k = LETTER_HEIGHT / 4,
  r = LETTER_WIDTH / 2,
  offsetX = startX,
  offsetY = startY
}) => {
  moveMouseFast(
    computeX({
      theta: start,
      r,
      j,
      k,
      offset: offsetX
    }),
    computeY({
      theta: start,
      r,
      j,
      k,
      offset: offsetY
    })
  );
  toggleMouse(true);
  let x = startX;
  let y = startY;
  for(let theta = start; theta <= end; theta += CURVE_QUALITY) {
    x = computeX({theta, r, j, k, offset: offsetX})
    y = computeY({theta, r, j, k, offset: offsetY})
    moveMouse(x, y);
  }
  toggleMouse(false)
}

module.exports = {
  drawCircle,
  computeY,
  computeX
}
