const {measurePerf} = require("../helpers/common");
const {LETTER_SPACING, LINE_HEIGHT, COLUMN_LIMIT, ROW_LIMIT, MINIMAP_POSITION_TUPLE} = require("../constants/common");
const {toggleKeyboardKey} = require("../utils/robot");
const [width, height] = MINIMAP_POSITION_TUPLE;

let caretColumn = 0;
let caretRow = 0;

const resetCaret = () => {
  caretRow = 0
  caretColumn = 0
}

const drawWithCaretMove = (draw) => {
  measurePerf(() => {
    const newLetterX = width + (LETTER_SPACING * caretColumn);
    const newLetterY = height + (LINE_HEIGHT * caretRow);
    toggleKeyboardKey('control', true)
    draw(newLetterX, newLetterY)
    toggleKeyboardKey('control', false)
    if (caretColumn < COLUMN_LIMIT) {
      caretColumn += 1
      return
    }
    if (caretRow < ROW_LIMIT) {
      caretRow += 1
      caretColumn = 0
      return;
    }
    caretRow = 0
    caretColumn = 0
  })
}

module.exports = {
  resetCaret,
  drawWithCaretMove
}
