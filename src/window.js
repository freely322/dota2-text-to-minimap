let mainWindow = null;

const setWindow = (instance) => {
  mainWindow = instance
}

const getWindow = () => mainWindow

module.exports = {
  setWindow,
  getWindow
}
