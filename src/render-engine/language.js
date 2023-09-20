const {parentPort} = require("worker_threads");
const {TYPING_LANGUAGE} = require ("../constants/common");

let currentInputLanguage = TYPING_LANGUAGE;

const setCurrentInputLanguage = (lng) => { currentInputLanguage = lng }
const getCurrentInputLanguage = () => currentInputLanguage

parentPort.on('message', (event) => {
  switch (event.type) {
    case 'set-current-input-language': {
      setCurrentInputLanguage(event.value)
      break
    }
  }
})

module.exports = {
  getCurrentInputLanguage
}
