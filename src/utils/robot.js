const robot = require("@jitsi/robotjs");
const {DEFAULT_MOUSE_DELAY, MINIMAP_POSITION_TUPLE} = require("../constants/common");

robot.setMouseDelay(DEFAULT_MOUSE_DELAY);
robot.setKeyboardDelay(1);

const moveMouse = (x, y, delay = DEFAULT_MOUSE_DELAY) => {
  robot.setMouseDelay(delay)
  robot.moveMouse(x, y)
  robot.setMouseDelay(DEFAULT_MOUSE_DELAY)
}

const moveMouseFast = (x, y) => {
  robot.setMouseDelay(15)
  robot.moveMouse(x, y)
  robot.setMouseDelay(DEFAULT_MOUSE_DELAY)
}

const toggleMouse = (pressed) => {
  robot.mouseToggle(pressed ? 'down' : 'up')
}

const toggleKeyboardKey = (key, pressed) => {
  robot.keyToggle(key, pressed ? 'down' : 'up')
}

const pressKeyboardKey = (key) => {
  robot.keyTap(key)
}

const dragMouse = (x, y, delay) => {
  toggleMouse(true)
  moveMouse(x, y, delay)
  toggleMouse(false)
}

const getMousePosition = robot.getMousePos

const mouseAwareAction = (func) => {
  let mousePositionTemp = getMousePosition()
  func()
  moveMouseFast(mousePositionTemp.x, mousePositionTemp.y)
}

const createMemoizedMousePosition = () => {
  let mousePositionTemp = getMousePosition()
  return {
    reset: () => {
      moveMouseFast(mousePositionTemp.x, mousePositionTemp.y)
    },
    get: () => mousePositionTemp,
    update: () => { mousePositionTemp = getMousePosition() }

  }
}

const moveMouseToMinimap = () => {
  moveMouseFast(...MINIMAP_POSITION_TUPLE)
}

const toggleChat = () => {
  robot.keyToggle('shift', 'down')
  robot.keyToggle('home', 'down')
  robot.keyToggle('shift', 'up')
  robot.keyToggle('home', 'up')
  pressKeyboardKey('backspace')
  pressKeyboardKey('enter')
}

module.exports = {
  moveMouse,
  moveMouseFast,
  toggleKeyboardKey,
  dragMouse,
  toggleMouse,
  toggleChat,
  pressKeyboardKey,
  mouseAwareAction,
  moveMouseToMinimap,
  createMemoizedMousePosition
}
