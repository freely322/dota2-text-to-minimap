const {ipcMain} = require("electron");
const {getWindow} = require("./window");
const {startApp} = require("./utils/app-startup");

const initHandlers = () => {
  ipcMain.on('start-app', (event) => {
    const result = startApp();
    console.log(result)
    event.reply('status-update', result ? '1' : '0')
  });
  ipcMain.on('close-app', () => {
    getWindow().close();
  });
}

module.exports = {
  initHandlers
}
