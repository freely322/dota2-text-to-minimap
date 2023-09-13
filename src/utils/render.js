const {setLoopStatus} = require("../render-engine");
let isRendering = false;

const getRenderingStatus = () => isRendering
const setRenderingStatus = (status) => {
  setLoopStatus(status)
  isRendering = status
}

module.exports = {
  setRenderingStatus,
  getRenderingStatus
}
