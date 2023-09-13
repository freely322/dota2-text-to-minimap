const { Worker } = require('worker_threads');

const renderLoopWorker = new Worker('./src/render-engine/render-engine.worker.js');

module.exports = {
  renderLoopWorker
}
