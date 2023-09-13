const {renderLoopWorker} = require("../workers");
const resetQueue = () => {
  renderLoopWorker.postMessage({ type: 'reset-queue' })
}

const addToRenderQueue = (event) => {
  renderLoopWorker.postMessage({
    type: 'add-to-render-queue',
    value: event
  })
}

const setLoopStatus = (status) => {
  renderLoopWorker.postMessage({
    type: 'setLoopStatus',
    value: status
  })
}

module.exports = {
  resetQueue,
  addToRenderQueue,
  setLoopStatus
}
