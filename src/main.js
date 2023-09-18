const {app, BrowserWindow} = require('electron');
const {join} = require("path");
const {setWindow} = require("./window");
const {initHandlers} = require("./handlers");
const {broadcast} = require("./helpers/electron");

let mainWindow;

const initElectron = () => {
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 400,
      height: 546,
      frame: false,
      resizable: false,
      minimizable: true,
      backgroundColor: '#323232',
      icon: join(__dirname, './assets/icon.ico'),
      webPreferences: {
        disableHtmlFullscreenWindowResize: true,
        nodeIntegration: true,
        contextIsolation: false
      }
    });
    //mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.setMenu(null)
    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadFile(join(__dirname, './frontend/index.html'));
  }

  app
    .whenReady()
    .then(createWindow)
    .then(() => setWindow(mainWindow))
    .then(initHandlers);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('status-update', (status) => {
    broadcast('status-update', status)
  });
}

module.exports = {
  initElectron
}
