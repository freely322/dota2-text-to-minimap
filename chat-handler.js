const ioHook = require('iohook');
const robot = require("@jitsi/robotjs");
const {useMainWindow, getDrawing, setDrawing} = require("./main");
const {DEFAULT_MOUSE_DELAY, MINIMAP_POSITION_TUPLE} = require("./constants");

const chatListener = (chatActiveHandler, chatInactiveHandler) => {
  let mousePositionTemp = robot.getMousePos()
  ioHook.on("keydown", event => {
    // The keycode for 'Enter' is 13
    if (getDrawing() && event.rawcode === 13) {
      return;
    }
    if (event.rawcode === 220) {
      if (!getDrawing()) {
        mousePositionTemp = robot.getMousePos()
        robot.keyTap('enter')
        setTimeout(() => {
          setDrawing(true);
          useMainWindow().webContents.send('console', '⌨️ Печатай...')
          useMainWindow().webContents.send('status-update', '2')
        }, 200)
        robot.setMouseDelay(1)
        robot.moveMouse(...MINIMAP_POSITION_TUPLE)
        robot.setMouseDelay(DEFAULT_MOUSE_DELAY)
        return;
      }
      useMainWindow().webContents.send('console', '✋ Больше не печатай...')
      useMainWindow().webContents.send('status-update', '1')
      setDrawing(false);
      robot.setMouseDelay(1)
      robot.moveMouse(mousePositionTemp.x, mousePositionTemp.y)
      robot.setMouseDelay(DEFAULT_MOUSE_DELAY)
      robot.keyTap('enter')
      return
    }
    if (getDrawing()) {
      chatActiveHandler(event)
    } else {
      chatInactiveHandler(event)
    }
  });

}

module.exports = {
  chatListener
}
