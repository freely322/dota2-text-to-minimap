const {app} = require('electron')
const languages = require("../i18n/languages")
const {renderLoopWorker} = require("../workers");
const {consoleService} = require("./console.service");

const languagesArray = Object.values(languages)

let sequence = 0;
let _currentInputLanguage = languagesArray[sequence];
const toggleCurrentInputLanguage = () => {
  const temp = sequence + 1
  if (languagesArray.length - 1 >= temp) {
    sequence = temp
    return setCurrentInputLanguage(languagesArray[temp])
  }
  sequence = 0
  return setCurrentInputLanguage(languagesArray[0])
}

const restoreSequence = (lng) => {
  const index = Object.values(languages).findIndex((el) => el === lng)
  if (index >= 0) {
    sequence = index
  }
}

const setCurrentInputLanguage = (lng) => {
  app.emit('input-language-update', lng)
  _currentInputLanguage = lng
  renderLoopWorker.postMessage({
    type: 'set-current-input-language',
    value: lng
  })
  consoleService.inputLanguageChanged(lng)
}
const getCurrentInputLanguage = () => _currentInputLanguage

app.on('get-input-language', () => {
  app.emit('input-language-update', _currentInputLanguage)
})

app.on('input-language-update', (lng) => {
  restoreSequence(lng)
  _currentInputLanguage = lng
  renderLoopWorker.emit({
    type: 'set-current-input-language',
    value: lng
  })
})

app.on('input-language-toggle', () => {
  toggleCurrentInputLanguage()
})

const inputLanguageService = {
  getCurrentInputLanguage,
  setCurrentInputLanguage,
  toggleCurrentInputLanguage
}

module.exports = {
  inputLanguageService
}
