const { parentPort } = require('worker_threads')

let firstMember = null
let lastMember = null
let size = 0

const _createQueueMember = (value) => ({
  value,
  next: null
})

const resetQueue = () => {
  firstMember = null
  lastMember = null
  size = 0
}

const getItemFromRenderQueue = () => {
  if (!firstMember) return null
  const temp = firstMember;
  if (firstMember === lastMember) {
    lastMember = null
  }
  firstMember = firstMember.next
  size--
  return temp.value
}
const addItemToRenderQueue = (value) => {
  const newMember = _createQueueMember(value)
  if (!firstMember) {
    firstMember = newMember
    lastMember = newMember
  } else {
    lastMember.next = newMember
    lastMember = newMember
  }
  return ++size
}

parentPort.on('message', (event) => {
  switch (event.type) {
    case 'add-to-render-queue': {
      addItemToRenderQueue(event.value)
      break
    }
    case 'reset-queue': {
      resetQueue()
      parentPort.postMessage({ type: 'appStatusService.setActiveStatus' })
      break
    }
  }
})

module.exports = {
  getItemFromRenderQueue,
  addItemToRenderQueue,
  resetQueue
}
