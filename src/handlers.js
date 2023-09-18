const {ipcMain, app} = require("electron");
const {getWindow} = require("./window");
const {startApp} = require("./utils/app-startup");
const {pressKeyboardKey} = require("./utils/robot");
const {broadcast, closeAllWindows} = require("./helpers/electron");
const {openOverlay} = require("./frontend/windows/overlay/overlay");

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
}

module.exports = {
  initHandlers
}
