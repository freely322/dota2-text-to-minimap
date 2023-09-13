const { app, BrowserWindow } = require('electron');
const {join} = require("path");
const {initHandlers} = require("./handlers");

let mainWindow;

const initElectron = () => {
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 400,
      height: 546,
      frame: false,
      resizable: false,
      icon: join(__dirname, './icon.ico'),
      webPreferences: {
        disableHtmlFullscreenWindowResize: true,
        nodeIntegration: true,
        contextIsolation: false
      }
    });
    //mainWindow.webContents.openDevTools();
    mainWindow.setMenu(null)
    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadFile('index.html');
  }

  app.whenReady().then(createWindow);

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

const useMainWindow = () => {
  return mainWindow
}

initElectron()
initHandlers(mainWindow)

module.exports = {
  useMainWindow
}
