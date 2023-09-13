let isAppStarted = false
let isAppStartedOnce = false

const setIsAppStarted = (state) => {
  if (!isAppStartedOnce && state) {
    isAppStartedOnce = true
  }
  isAppStarted = state
}

const getIsAppStarted = () => isAppStarted
const getIsAppStartedOnce = () => isAppStartedOnce

module.exports = {
  setIsAppStarted,
  getIsAppStarted,
  getIsAppStartedOnce,
}
