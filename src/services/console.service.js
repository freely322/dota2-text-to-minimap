const {t} = require("../i18n/language-handler");
const {getWindow} = require("../window");
const {renderLoopWorker} = require("../workers");

const writeToConsole = (text) => getWindow().webContents.send('console', text)

const startType = () => writeToConsole(t('input-handler_start-type'))
const endType = () => writeToConsole(t('input-handler_end-type'))

const startApp = () => writeToConsole(t('app-runner_active'))
const stopApp = () => writeToConsole(t('app-runner_inactive'))

const drawLetter = (letter) => writeToConsole(t('render_draw-letter', { letter }))

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
  drawLetter
}

module.exports = {
  consoleService
}
