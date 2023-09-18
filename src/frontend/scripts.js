const { ipcRenderer } = require('electron');

const setStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {
    ipcRenderer.send('start-app')
  }
}

const disableStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {}
}


document.getElementById('close').onclick = () => {
  ipcRenderer.send('close-app')
}

document.getElementById('minimize').onclick = () => {
  ipcRenderer.send('minimize-app')
}

const handleAppStatus = (status) => {
  if (status === '1') {
    document.getElementById('start-app-button').innerText = 'Выключить'
    document.getElementById('status').className = 'active'
    document.getElementById('start-app-button').ariaDisabled = 'false'
    setStartAppButton()
    return
  }
  if (status === '2') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'writing'
    disableStartAppButton()
    return
  }
  if (status === '3') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'drawing'
    disableStartAppButton()
    return
  }
  document.getElementById('start-app-button').ariaDisabled = 'false'
  document.getElementById('start-app-button').innerText = 'Включить'
  document.getElementById('status').className = 'inactive'
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
