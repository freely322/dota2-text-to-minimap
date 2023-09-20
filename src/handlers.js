const {ipcMain, app} = require("electron");
const {getWindow} = require("./window");
const {startApp} = require("./utils/app-startup");
const {pressKeyboardKey} = require("./utils/robot");
const {broadcast, closeAllWindows} = require("./helpers/electron");
const {openOverlay} = require("./frontend/windows/overlay/overlay");
const {inputLanguageService} = require("./services/input-language.service");
const {toggleAppLanguage, getAppLanguage, setAppLanguage} = require("./i18n/language-handler");
const {consoleService} = require("./services/console.service");

const initHandlers = () => {
  ipcMain.on('start-app', () => {
    const result = startApp();
    app.emit('status-update', result ? '1' : '0')
    broadcast('status-update', result ? '1' : '0')
  });
  ipcMain.on('toggle-input', () => {
    pressKeyboardKey('\\')
  })
  ipcMain.on('restore-state', () => {
    app.emit('get-app-state')
  })
  ipcMain.on('close-app', () => {
    closeAllWindows()
  });
  ipcMain.on('minimize-app', () => {
    getWindow().minimize();
    openOverlay()
  });
  ipcMain.on('input-language-toggle', () => {
    inputLanguageService.toggleCurrentInputLanguage()
  });
  ipcMain.on('app-language-toggle', () => {
    toggleAppLanguage()
  });
  ipcMain.on('restore-input-language', () => {
    const result = inputLanguageService.getCurrentInputLanguage()
    app.emit('input-language-update', result)
    broadcast('input-language-update', result)
  })
  ipcMain.on('toggle-app-language', () => {
    toggleAppLanguage()
  })
  ipcMain.on('set-app-language', (event, args) => {
    setAppLanguage(args)
  })
  ipcMain.on('get-app-language', (event) => {
    event.returnValue = getAppLanguage();
  });
  ipcMain.on('get-console-content', (event) => {
    event.returnValue = consoleService.getConsoleContent();
  });
}

module.exports = {
  initHandlers
}
