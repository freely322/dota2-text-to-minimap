const {BrowserWindow, ipcMain, screen} = require('electron');
const {join} = require("path");
const {getWindow} = require("../../../window");

let overlayWindow;

const openOverlay = () => {
  if (overlayWindow) {
    return
  }
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  overlayWindow = new BrowserWindow({
    width: 160,
    height: 36,
    x: Math.round(width / 8.5),
    y: Math.round(height / 100),
    backgroundColor: '#323232',
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      disableHtmlFullscreenWindowResize: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  overlayWindow.setMenu(null)
  overlayWindow.setMenuBarVisibility(false)
  overlayWindow.loadFile(join(__dirname, './index.html'));
  overlayWindow.setFocusable(false);
  overlayWindow.setAlwaysOnTop(true, "screen-saver", 1);
  overlayWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  //overlayWindow.webContents.openDevTools({ mode: 'detach' });

  const handleClose = () => {
    overlayWindow.close()
    overlayWindow = undefined;
    ipcMain.removeListener('close-overlay', handleClose)
  }
  const handleRestore = () => {
    getWindow().show()
    ipcMain.removeListener('restore-app', handleRestore)
  }

  ipcMain.on('close-overlay', handleClose);
  ipcMain.on('restore-app', handleRestore);
}

module.exports = {
  openOverlay
}
