const { performance } = require('perf_hooks');

const measurePerf = (func) => {
  const start = performance.now()
  func()
  console.log(`${performance.now() - start}ms`)
}

const noop = () => {}

module.exports = {
  measurePerf,
  noop
}
