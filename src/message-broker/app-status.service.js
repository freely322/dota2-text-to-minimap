const {useMainWindow} = require("../../main");
const {electronWorker} = require("../../workers");

const setAppStatus = (status) => useMainWindow().webContents.send('status-update', status)
const setDrawingStatus = () => setAppStatus( '3')
const setWaitingStatus = () => setAppStatus( '2')
const setActiveStatus = () => setAppStatus('1')

electronWorker.on('message', (event) => {
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
