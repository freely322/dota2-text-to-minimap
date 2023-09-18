const { ipcRenderer } = require('electron');

const setStartAppButton = () => {
  document.getElementById('start-app-button').ariaDisabled = 'false'
  document.getElementById('start-app-button').onclick = () => {
    ipcRenderer.send('start-app')
  }
}

const disableStartAppButton = () => {
  document.getElementById('start-app-button').ariaDisabled = 'true'
  document.getElementById('start-app-button').onclick = () => {}
}

const setStartInputButton = () => {
  document.getElementById('start-input-button').ariaDisabled = 'false'
  document.getElementById('start-input-button').onclick = () => {
    ipcRenderer.send('toggle-input')
  }
}

const disableStartInputButton = () => {
  document.getElementById('start-input-button').ariaDisabled = 'true'
  document.getElementById('start-input-button').onclick = () => {}
}

document.getElementById('close').onclick = () => {
  ipcRenderer.send('close-overlay')
}

document.getElementById('restore').onclick = () => {
  ipcRenderer.send('restore-app')
}


const handleAppStatus = (status) => {
  if (status === '1') {
    document.getElementById('status').className = 'active'
    document.getElementById('start-app-button').classList.add('button-toggle-active')
    document.getElementById('start-input-button').classList.remove('button-toggle-active')
    setStartInputButton()
    setStartAppButton()
    return
  }
  if (status === '2') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'writing'
    document.getElementById('start-input-button').classList.add('button-toggle-active')
    setStartInputButton()
    disableStartAppButton()
    return
  }
  if (status === '3') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'drawing'
    setStartInputButton()
    disableStartAppButton()
    return
  }
  document.getElementById('start-app-button').classList.remove('button-toggle-active')
  document.getElementById('status').className = 'inactive'
  disableStartInputButton()
  setStartAppButton()
}

ipcRenderer.on('status-update', (event, args) => {
  handleAppStatus(args)
})

ipcRenderer.on('console', (event, args) => {
  const console = document.getElementById('console')
  console.innerHTML = `${console.innerHTML}${args}<br>`
  console.scrollTop = console.scrollHeight
})

ipcRenderer.send('restore-state')
