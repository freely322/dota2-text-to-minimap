const {ipcMain} = require("electron");
const {startApp} = require("./typer");
const {useMainWindow} = require("./main");

const initHandlers = () => {
  ipcMain.on('start-app', (event) => {
    const result = startApp();
    event.reply('status-update', result ? '1' : '0')
  });
  ipcMain.on('close-app', () => {
    useMainWindow().close();
  });
}

module.exports = {
  initHandlers
}
