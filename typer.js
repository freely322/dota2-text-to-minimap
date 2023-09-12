const robot = require("@jitsi/robotjs");
const {
  A,
  B,
  E,
  L,
  V,
  Z,
  G,
  D,
  J,
  I,
  Is,
  K,
  M,
  N,
  O,
  S,
  P,
  R,
  T,
  U,
  F,
  H,
  C,
  Ch,
  Sch,
  Sh,
  Soft,
  Hard,
  Uu,
  Ee,
  You,
  Ya
} = require('./draw')
const { chatListener } = require('./chat-handler')
const {
  MINIMAP_POSITION_TUPLE,
  LINE_HEIGHT,
  LETTER_SPACING,
  ROW_LIMIT,
  COLUMN_LIMIT, DEFAULT_MOUSE_DELAY
} = require("./constants");
const {measurePerf} = require("./helpers");
const iohook = require("iohook");
const {useMainWindow} = require("./main");

robot.setMouseDelay(DEFAULT_MOUSE_DELAY);
robot.setKeyboardDelay(1);

const [width, height] = MINIMAP_POSITION_TUPLE;

let caretColumn = 0;
let caretRow = 0;

const drawWithCaretMove = (draw) => {
  measurePerf(() => {
    const newLetterX = width + (LETTER_SPACING * caretColumn);
    const newLetterY = height + (LINE_HEIGHT * caretRow);
    robot.keyToggle('control', 'down')
    useMainWindow().webContents.send('status-update', '3')
    draw(newLetterX, newLetterY)
    useMainWindow().webContents.send('status-update', '2')
    robot.keyToggle('control', 'up')
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

const drawPressedLetter = ({ rawcode }) => {
  switch (rawcode) {
    case 32: { drawWithCaretMove(() => {}); break; }
    case 70: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву А...')
      drawWithCaretMove(A); break;
    }
    case 188: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Б...')
      drawWithCaretMove(B); break;
    }
    case 68: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву В...')
      drawWithCaretMove(V); break;
    }
    case 85: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Г...')
      drawWithCaretMove(G); break;
    }
    case 76: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Д...')
      drawWithCaretMove(D); break;
    }
    case 84: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Е...')
      drawWithCaretMove(E); break;
    }
    case 186: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ж...')
      drawWithCaretMove(J); break;
    }
    case 80: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву З...')
      drawWithCaretMove(Z); break;
    }
    case 66: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву И...')
      drawWithCaretMove(I); break;
    }
    case 81: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Й...')
      drawWithCaretMove(Is); break;
    }
    case 82: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву К...')
      drawWithCaretMove(K); break;
    }
    case 75: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Л...')
      drawWithCaretMove(L); break;
    }
    case 86: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву М...')
      drawWithCaretMove(M); break;
    }
    case 89: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Н...')
      drawWithCaretMove(N); break;
    }
    case 74: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву О...')
      drawWithCaretMove(O); break;
    }
    case 71: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву П...')
      drawWithCaretMove(P); break;
    }
    case 72: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Р...')
      drawWithCaretMove(R); break;
    }
    case 67: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву С...')
      drawWithCaretMove(S); break;
    }
    case 78: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Т...')
      drawWithCaretMove(T); break;
    }
    case 69: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву У...')
      drawWithCaretMove(U); break;
    }
    case 65: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ф...')
      drawWithCaretMove(F); break;
    }
    case 219: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Х...')
      drawWithCaretMove(H); break;
    }
    case 87: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ц...')
      drawWithCaretMove(C); break;
    }
    case 88: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ч...')
      drawWithCaretMove(Ch); break;
    }
    case 73: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ш...')
      drawWithCaretMove(Sh); break;
    }
    case 79: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Щ...')
      drawWithCaretMove(Sch); break;
    }
    case 221: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ъ...')
      drawWithCaretMove(Hard); break;
    }
    case 77: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ь...')
      drawWithCaretMove(Soft); break;
    }
    case 83: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ы...')
      drawWithCaretMove(Uu); break;
    }
    case 222: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Э...')
      drawWithCaretMove(Ee); break;
    }
    case 190: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Ю...')
      drawWithCaretMove(You); break;
    }
    case 90: {
      useMainWindow().webContents.send('console', '✍️ Рисуем букву Я...')
      drawWithCaretMove(Ya); break;
    }
  }
}

let appStarted = false
let appStartedOnce = false
const startApp = () => {
  if (!appStartedOnce) {
    chatListener(drawPressedLetter, () => {})
    appStartedOnce = true
  }
  if (appStarted) {
    iohook.stop()
    useMainWindow().webContents.send('console', '❌ Программа не активна')
    appStarted = false
    return false
  }
  iohook.start()
  useMainWindow().webContents.send('console', '✅ Нажми "\\" чтобы начать')
  appStarted = true
  return true
}

module.exports = {
  startApp
}

