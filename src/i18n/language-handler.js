const {app} = require('electron')
const languages = require("./languages");
const {LANGUAGE_RU, LANGUAGE_UA} = languages;
const languagesArray = Object.values(languages)

const languageKeyMap = {
  [LANGUAGE_RU]: require('./json/ru.json'),
  [LANGUAGE_UA]: require('./json/ua.json')
}

let sequence = 0;
let appLanguage = null;

const getAppLanguage = () => appLanguage

const setAppLanguage = (lng) => {
  global.appLanguage = lng
  appLanguage = lng
  restoreSequence(lng)
  app.emit('app-language-update', lng)
}

const toggleAppLanguage = () => {
  const temp = sequence + 1
  if (languagesArray.length - 1 >= temp) {
    sequence = temp
    return setAppLanguage(languagesArray[temp])
  }
  sequence = 0
  return setAppLanguage(languagesArray[0])
}

const restoreSequence = (lng) => {
  const index = Object.values(languages).findIndex((el) => el === lng)
  if (index >= 0) {
    sequence = index
  }
}

const t = (token, variables) => {
  let temp = languageKeyMap[appLanguage][token];
  if (variables) {
    const entries = Object.entries(variables)
    entries.forEach(([key, value]) => {
      temp = temp.replace(RegExp(`\{\{${key}}}`), value)
    })
  }
  return temp
}

const tr = (lng, token, variables) => {
  let temp = languageKeyMap[lng][token];
  if (variables) {
    const entries = Object.entries(variables)
    entries.forEach(([key, value]) => {
      temp = temp.replace(RegExp(`\{\{${key}}}`), value)
    })
  }
  return temp
}

module.exports = {
  getAppLanguage,
  setAppLanguage,
  toggleAppLanguage,
  t,
  tr
}
