const {LANGUAGE_RU} = require("./languages");

let appLanguage = LANGUAGE_RU;

const languageKeyMap = {
  [LANGUAGE_RU]: require('./json/ru.json')
}

const getAppLanguage = () => appLanguage

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

module.exports = {
  getAppLanguage,
  t
}
