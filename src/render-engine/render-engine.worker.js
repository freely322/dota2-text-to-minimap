const {drawWithCaretMove} = require("./caret-handler");
const {TYPING_LANGUAGE} = require("../constants/constants");
const {getItemFromRenderQueue} = require("./queue");
const {parentPort} = require('worker_threads')
const {LANGUAGE_RU} = require("../i18n/languages");

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
  [LANGUAGE_RU]: require(`./draw-RU`)
}

const drawPressedLetterFromQueue = () => {
  const event = getItemFromRenderQueue()
  if (!event || !isLooping) {
    return
  }
  const { rawcode } = event
  if (rawcode === 32) {
    drawWithCaretMove(() => {})
    return
  }
  try {
    const letter = alphabet[TYPING_LANGUAGE][rawcode];
    if (letter) {
      parentPort.postMessage({ type: 'appStatusService.setDrawingStatus' })
      drawWithCaretMove(letter.draw)
      parentPort.postMessage({
        type: 'consoleService.drawLetter',
        value: letter.symbol
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

