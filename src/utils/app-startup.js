const {inputHandler} = require('./input-handler')
const {noop} = require("../helpers/common");
const {stopKeyboardListeners, startKeyboardListeners} = require("./iohook");
const {consoleService} = require("../services/console.service");
const {addToRenderQueue} = require("../render-engine");

let isAppStarted = false
let isAppStartedOnce = false

const setIsAppStarted = (state) => {
  if (!isAppStartedOnce && state) {
    isAppStartedOnce = true
  }
  isAppStarted = state
}

const startApp = () => {
  if (!isAppStartedOnce) {
    inputHandler(
      (event) => {
        addToRenderQueue(event)
      },
      noop
    )
  }
  if (isAppStarted) {
    stopKeyboardListeners()
    consoleService.stopApp()
    setIsAppStarted(false)
    return false
  }
  startKeyboardListeners()
  consoleService.startApp()
  setIsAppStarted(true)
  return true
}

module.exports = {
  startApp
}
