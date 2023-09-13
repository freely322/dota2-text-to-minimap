const {createMemoizedMousePosition, moveMouseToMinimap, toggleChat} = require("./robot");
const {appStatusService} = require("../services/app-status.service");
const {consoleService} = require("../services/console.service");
const {listenToKeyboard} = require("./iohook");
const {getRenderingStatus, setRenderingStatus} = require("./render");
const {resetQueue} = require("../render-engine");

const inputHandler = (chatActiveHandler, chatInactiveHandler) => {
  const mousePosition = createMemoizedMousePosition()
  listenToKeyboard((event) => {
    if (getRenderingStatus() && event.rawcode === 13) {
      return;
    }
    if (event.rawcode === 220) {
      if (!getRenderingStatus()) {
        mousePosition.update();
        toggleChat()
        moveMouseToMinimap()
        setTimeout(() => {
          setRenderingStatus(true);
          consoleService.startType()
          appStatusService.setWaitingStatus()
        }, 200)
        return;
      }
      consoleService.endType()
      appStatusService.setActiveStatus()
      setRenderingStatus(false);
      resetQueue()
      setTimeout(() => {
        mousePosition.reset();
        toggleChat()
      }, 1000)
      return
    }
    if (getRenderingStatus()) {
      chatActiveHandler(event)
    } else {
      chatInactiveHandler(event)
    }
  })

}

module.exports = {
  inputHandler
}
