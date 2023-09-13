const { Worker } = require('worker_threads');
//const {renderLoopWorker} = require("./src/render-engine");

const electronWorker = new Worker('./main.js')
const renderLoopWorker = new Worker('./src/render-engine/render-engine.js');

module.exports = {
  electronWorker,
  renderLoopWorker
}
