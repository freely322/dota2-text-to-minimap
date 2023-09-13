const {createMemoizedMousePosition, moveMouseToMinimap, toggleChat} = require("./input-puppeteer");
const {appStatusService} = require("../message-broker/app-status.service");
const {consoleService} = require("../message-broker/console.service");
const {listenToKeyboard} = require("./keyboard-listener");
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
      toggleChat()
      setTimeout(() => {
        mousePosition.reset();
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
