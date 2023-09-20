const {getWindow} = require("../window");
const {renderLoopWorker} = require("../workers");
const {t} = require("../i18n/language-handler");

let consoleContent = [];

const writeToConsole = (text, variables) => {
  consoleContent = [...consoleContent, [text, variables]]
  getWindow().webContents.send('console', t(text, variables))
}

const getConsoleContent = () => consoleContent

const startType = () => writeToConsole('input-handler_start-type')
const endType = () => writeToConsole('input-handler_end-type')

const startApp = () => writeToConsole('app-runner_active')
const stopApp = () => writeToConsole('app-runner_inactive')

const inputLanguageChanged = (lng) => writeToConsole(`render_input-language_changed_${lng}`)

const drawLetter = (letter) => writeToConsole('render_draw-letter', { letter })

renderLoopWorker.on('message', (event) => {
  switch (event.type) {
    case 'consoleService.writeToConsole': {
      writeToConsole(event.value)
      break
    }
    case 'consoleService.drawLetter': {
      drawLetter(event.value)
      break
    }
  }
})

const consoleService = {
  startType,
  endType,
  stopApp,
  startApp,
  drawLetter,
  inputLanguageChanged,
  getConsoleContent
}

module.exports = {
  consoleService
}
