const { Worker } = require('worker_threads');
const {join} = require("path");

const renderLoopWorker = new Worker(
  join(__dirname, './render-engine/render-engine.worker.js')
    .replace('app.asar', 'app.asar.unpacked')
);

module.exports = {
  renderLoopWorker
}
