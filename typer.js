const { chatListener } = require('./src/input-handler')
const { noop} = require("./helpers");
const {stopKeyboardListeners, startKeyboardListeners} = require("./src/utils/keyboard-listener");
const {consoleService} = require("./src/message-broker/console.service");
const {setIsAppStarted, getIsAppStartedOnce, getIsAppStarted} = require("./src/app-startup");
const {startRenderLoop} = require("./src/render-engine/render-engine");
const {renderLoopWorker} = require("./workers");

const startApp = () => {
  startRenderLoop()
  if (!getIsAppStartedOnce()) {
    chatListener(
      (event) => {
        console.log(event)
        renderLoopWorker.postMessage({
          type: 'add-to-render-queue',
          value: event
        })
      },
      noop
    )
  }
  if (getIsAppStarted()) {
    stopKeyboardListeners()
    consoleService.stopApp()
    setIsAppStarted(false)
    renderLoopWorker.postMessage({ type: 'reset-queue' })
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

