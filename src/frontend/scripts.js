const { ipcRenderer } = require('electron');

const setStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {
    ipcRenderer.send('start-app')
  }
}

const disableStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {}
}

setStartAppButton()

document.getElementById('close').onclick = () => {
  ipcRenderer.send('close-app')
}

ipcRenderer.on('status-update', (event, args) => {
  console.log(event, args)
  if (args === '1') {
    document.getElementById('start-app-button').innerText = 'Выключить'
    document.getElementById('status').className = 'active'
    document.getElementById('start-app-button').ariaDisabled = 'false'
    setStartAppButton()
    return
  }
  if (args === '2') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'writing'
    disableStartAppButton()
    return
  }
  if (args === '3') {
    document.getElementById('start-app-button').ariaDisabled = 'true'
    document.getElementById('status').className = 'drawing'
    disableStartAppButton()
    return
  }
  document.getElementById('start-app-button').ariaDisabled = 'false'
  document.getElementById('start-app-button').innerText = 'Включить'
  document.getElementById('status').className = 'inactive'
  setStartAppButton()
})

ipcRenderer.on('console', (event, args) => {
  const console = document.getElementById('console')
  console.innerHTML = `${console.innerHTML}${args}<br>`
  console.scrollTop = console.scrollHeight
})
