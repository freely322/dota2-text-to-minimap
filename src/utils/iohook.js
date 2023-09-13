const iohook = require("iohook");
const listenToKeyboard = (func) => {
  iohook.on("keydown", event => {
    func(event)
  })
}

const startKeyboardListeners = () => {
  iohook.start();
}

const stopKeyboardListeners = () => {
  iohook.stop();
}

module.exports = {
  stopKeyboardListeners,
  startKeyboardListeners,
  listenToKeyboard
}
