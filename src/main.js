const {app, BrowserWindow} = require('electron');
const {join} = require("path");
const {setWindow} = require("./window");
const {initHandlers} = require("./handlers");

let mainWindow;

const initElectron = () => {
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 400,
      height: 546,
      frame: false,
      resizable: false,
      icon: join(__dirname, './assets/icon.ico'),
      webPreferences: {
        disableHtmlFullscreenWindowResize: true,
        nodeIntegration: true,
        contextIsolation: false
      }
    });
    //mainWindow.webContents.openDevTools();
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
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}

module.exports = {
  initElectron
}
