const {getWindow} = require("../window");
const {renderLoopWorker} = require("../workers");
const setAppStatus = (status) => getWindow().webContents.send('status-update', status)
const setDrawingStatus = () => setAppStatus('3')
const setWaitingStatus = () => setAppStatus('2')
const setActiveStatus = () => setAppStatus('1')

renderLoopWorker.on('message', (event) => {
  switch (event.type) {
    case 'appStatusService.setDrawingStatus': {
      setDrawingStatus()
      break
    }
    case 'appStatusService.setWaitingStatus': {
      setWaitingStatus()
      break
    }
    case 'appStatusService.setActiveStatus': {
      setActiveStatus()
      break
    }
    case 'appStatusService.setAppStatus': {
      setAppStatus(event.value)
      break
    }
  }
})

const appStatusService = {
  setDrawingStatus,
  setWaitingStatus,
  setActiveStatus
}

module.exports = {
  appStatusService
}
