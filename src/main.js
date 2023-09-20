const {app, BrowserWindow} = require('electron');
const {join} = require("path");
const {setWindow} = require("./window");
const {initHandlers} = require("./handlers");
const {broadcast} = require("./helpers/electron");
const {LANGUAGE_UA, LANGUAGE_RU} = require("./i18n/languages");
const {getAppLanguage} = require("./i18n/language-handler");
const { version } = require('../package.json')

let mainWindow;

const getLocalizedPath = (lng) => {
  switch (lng) {
    case LANGUAGE_UA: {
      return join(__dirname, './frontend/index-ua.html')
    }
    case LANGUAGE_RU: {
      return join(__dirname, './frontend/index-ru.html')
    }
    default: {
      return join(__dirname, './frontend/loading.html')
    }
  }
}

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
    mainWindow.loadFile(getLocalizedPath(getAppLanguage()));
  }

  app
    .whenReady()
    .then(createWindow)
    .then(() => {
      setWindow(mainWindow)
    })
    .then(initHandlers);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('status-update', (status) => {
    broadcast('status-update', status)
  });

  app.on('input-language-update', (lng) => {
    broadcast('input-language-update', lng)
  })

  app.on('app-language-update', (lng) => {
    mainWindow.webContents.send('app-language-update', lng)
    mainWindow.loadFile(getLocalizedPath(lng)).then(() => {
      mainWindow.webContents.send('set-version', version)
    })
  })
}

module.exports = {
  initElectron
}
