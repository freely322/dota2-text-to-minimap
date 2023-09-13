//console.log(require.resolve.paths("iohook"))
const keyboardListener = require("iohook");
const listenToKeyboard = (func) => {
  keyboardListener.on("keydown", event => {
    func(event)
  })
}

const startKeyboardListeners = () => {
  keyboardListener.start();
}

const stopKeyboardListeners = () => {
  keyboardListener.stop();
}

module.exports = {
  stopKeyboardListeners,
  startKeyboardListeners,
  listenToKeyboard
}
