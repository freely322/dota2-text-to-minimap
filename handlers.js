const {ipcMain} = require("electron");
const {startApp} = require("./typer");

const initHandlers = (mainWindow) => {
  ipcMain.on('start-app', (event) => {
    const result = startApp();
    event.reply('status-update', result ? '1' : '0')
  });
  ipcMain.on('close-app', () => {
    mainWindow.close();
  });
}

module.exports = {
  initHandlers
}
