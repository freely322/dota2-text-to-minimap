//const {consoleService} = require("../message-broker/console.service");
const {drawWithCaretMove} = require("./caret-handler");
const {TYPING_LANGUAGE} = require("../../constants");
const {getItemFromRenderQueue} = require("./queue");
const { isMainThread } = require('worker_threads')

let isRendering = false;

const getRenderingStatus = () => isRendering
const setRenderingStatus = (status) => { isRendering = status }

const drawPressedLetterFromQueue = () => {
  const event = getItemFromRenderQueue()
  if (!event) {
    return
  }
  const { rawcode } = event
  if (rawcode === 32) {
    drawWithCaretMove(() => {})
    return
  }
  try {
    const alphabet = require(`./draw-${TYPING_LANGUAGE}`)
    const letter = alphabet[rawcode];
    if (letter) {
      drawWithCaretMove(letter.draw)
      //consoleService.drawLetter(letter.symbol)
    }
  } catch (e) {
    console.log('Something happened!')
  }
}

const startRenderLoop = () => {
  console.log('start render engine', isMainThread)
  setInterval(() => {
    if (isRendering) {
      drawPressedLetterFromQueue()
    }
  }, 1000)
}

module.exports = {
  startRenderLoop,
  getRenderingStatus,
  setRenderingStatus
}
