const {app} = require('electron')

const {renderLoopWorker} = require("../workers");

let _appStatus = '0'

const getAppStatus = () => _appStatus

const setAppStatus = (status) => {
  app.emit('status-update', status)
  _appStatus = status
}
const setDrawingStatus = () => setAppStatus('3')
const setWaitingStatus = () => setAppStatus('2')
const setActiveStatus = () => setAppStatus('1')

app.on('get-app-state', () => {
  app.emit('status-update', _appStatus)
})

app.on('status-update', (status) => {
  _appStatus = status
})

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
  getAppStatus,
  appStatusService
}
