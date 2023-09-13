const {useMainWindow} = require("../../main");
const {t} = require("../i18n/language-handler");
const {electronWorker} = require("../../workers");

const writeToConsole = (text) => useMainWindow().webContents.send('console', text)

const startType = () => writeToConsole(t('input-handler_start-type'))
const endType = () => writeToConsole(t('input-handler_end-type'))

const startApp = () => writeToConsole(t('app-runner_active'))
const stopApp = () => writeToConsole(t('app-runner_inactive'))

const drawLetter = (letter) => writeToConsole(t('render_draw-letter', { letter }))

electronWorker.on('message', (event) => {
  switch (event.type) {
    case 'consoleService.writeToConsole': {
      writeToConsole(event.value)
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
