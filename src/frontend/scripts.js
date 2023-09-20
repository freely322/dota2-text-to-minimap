const { ipcRenderer, shell } = require('electron');
const {tr} = require("../i18n/language-handler");

const storedLanguage = localStorage.getItem('appLanguage') || 'RU'
const rootLanguage = ipcRenderer.sendSync('get-app-language')

if (!rootLanguage && storedLanguage !== rootLanguage) {
  setTimeout(() => {
    ipcRenderer.send('set-app-language', storedLanguage)
  }, 500)
}

if (rootLanguage && storedLanguage !== rootLanguage) {
  ipcRenderer.send('set-app-language', storedLanguage)
}

const lng = storedLanguage

const setStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {
    ipcRenderer.send('start-app')
  }
}

const disableStartAppButton = () => {
  document.getElementById('start-app-button').onclick = () => {}
}

if (rootLanguage) {
  const consoleContent = ipcRenderer.sendSync('get-console-content')

  const appConsole = document.getElementById('console')
  consoleContent.forEach(([token, variables]) => {
    appConsole.innerHTML = `${appConsole.innerHTML}${tr(lng, token, variables)}<br>`
    appConsole.scrollTop = appConsole.scrollHeight
  })

  document.getElementById('start-app-button').innerText = tr(lng, 'app-runner_activate')

  document.getElementById('close').onclick = () => {
    ipcRenderer.send('close-app')
  }

  document.getElementById('version').onclick = (e) => {
    e.preventDefault();
    let href = e.target.getAttribute('href');
    shell.openExternal(href);
  }

  document.getElementById('language').onclick = () => {
    ipcRenderer.send('input-language-toggle')
  }

  document.getElementById('minimize').onclick = () => {
    ipcRenderer.send('minimize-app')
  }

  document.getElementById('app-language').onclick = () => {
    ipcRenderer.send('toggle-app-language')
  }


  const handleAppStatus = (status) => {
    if (status === '1') {
      document.getElementById('start-app-button').innerText = tr(lng, 'app-runner_deactivate')
      document.getElementById('status').className = 'active'
      document.getElementById('start-app-button').ariaDisabled = 'false'
      setStartAppButton()
      return
    }
    if (status === '2') {
      document.getElementById('start-app-button').innerText = tr(lng, 'app-runner_deactivate')
      document.getElementById('start-app-button').ariaDisabled = 'true'
      document.getElementById('status').className = 'writing'
      disableStartAppButton()
      return
    }
    if (status === '3') {
      document.getElementById('start-app-button').innerText = tr(lng, 'app-runner_deactivate')
      document.getElementById('start-app-button').ariaDisabled = 'true'
      document.getElementById('status').className = 'drawing'
      disableStartAppButton()
      return
    }
    document.getElementById('start-app-button').ariaDisabled = 'false'
    document.getElementById('start-app-button').innerText = tr(lng, 'app-runner_activate')
    document.getElementById('status').className = 'inactive'
    setStartAppButton()
  }

  const handleLanguage = (lng) => {
    document.getElementById('language').className = `square-button flag-${lng}`
  }

  ipcRenderer.on('status-update', (event, args) => {
    handleAppStatus(args)
  })

  ipcRenderer.on('console', (event, args) => {
    const console = document.getElementById('console')
    console.innerHTML = `${console.innerHTML}${args}<br>`
    console.scrollTop = console.scrollHeight
  })

  ipcRenderer.on('input-language-update', (event, args) => {
    handleLanguage(args)
  })

  ipcRenderer.on('set-version', (event, args) => {
    document.getElementById('version').innerText = args
  })

  ipcRenderer.send('restore-state')
  ipcRenderer.send('restore-input-language')
}

ipcRenderer.on('app-language-update', (event, args) => {
  localStorage.setItem('appLanguage', args)
})
