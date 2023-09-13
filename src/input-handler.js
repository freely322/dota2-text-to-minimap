const {createMemoizedMousePosition, moveMouseToMinimap, toggleChat} = require("./utils/input-puppeteer");
const {appStatusService} = require("./message-broker/app-status.service");
const {consoleService} = require("./message-broker/console.service");
const {getRenderingStatus, setRenderingStatus} = require("./render-engine/render-engine");
const {listenToKeyboard} = require("./utils/keyboard-listener");

const chatListener = (chatActiveHandler, chatInactiveHandler) => {
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
      mousePosition.reset();
      toggleChat()
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
  chatListener
}
