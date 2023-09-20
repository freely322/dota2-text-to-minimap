const {drawWithCaretMove, resetCaret} = require("./caret");
const {getItemFromRenderQueue} = require("./queue");
const {parentPort} = require('worker_threads')
const {LANGUAGE_RU, LANGUAGE_UA} = require("../i18n/languages");

let isLooping = false;
let interval = null
const setLoopStatus = (status) => {
  if (status) {
    startRenderLoop()
  } else {
    clearInterval(interval)
  }
  isLooping = status
}

const alphabet = {
  [LANGUAGE_RU]: require(`./draw-RU`),
  [LANGUAGE_UA]: require(`./draw-UA`)
}

const numbers = require('./draw-NUM')
const {getCurrentInputLanguage} = require("./language");

const drawPressedLetterFromQueue = () => {
  const event = getItemFromRenderQueue()
  if (!event || !isLooping) {
    return
  }
  const { rawcode } = event
  if (rawcode === 8) {
    resetCaret()
    return
  }
  if (rawcode === 32) {
    drawWithCaretMove(() => {})
    return
  }
  try {
    const char = alphabet[getCurrentInputLanguage()][rawcode] || numbers[rawcode];
    if (char) {
      parentPort.postMessage({ type: 'appStatusService.setDrawingStatus' })
      drawWithCaretMove(char.draw)
      parentPort.postMessage({
        type: 'consoleService.drawLetter',
        value: char.symbol
      })
      parentPort.postMessage({ type: 'appStatusService.setWaitingStatus' })
    }
  } catch (e) {
    console.log('Something happened!')
  }
}

const startRenderLoop = () => {
  interval = setInterval(() => {
    if (isLooping) {
      drawPressedLetterFromQueue()
    }
  }, 50)
}

parentPort.on('message', (event) => {
  switch (event.type) {
    case 'setLoopStatus': {
      setLoopStatus(event.value)
      break
    }
  }
})

