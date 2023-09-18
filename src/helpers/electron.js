const {BrowserWindow} = require("electron");

const broadcast = (channel, value) => {
  const allWindows = BrowserWindow.getAllWindows();
  for (let win of allWindows) {
    win.webContents.send(channel, value)
  }
}

const closeAllWindows = () => {
  const allWindows = BrowserWindow.getAllWindows();
  for (let win of allWindows) {
    win.close();
  }
}

module.exports = {
  broadcast,
  closeAllWindows
}
