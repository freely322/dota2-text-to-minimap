const {draw0} = require('./draw-0')
const {draw1} = require('./draw-1')
const {draw2} = require('./draw-2')
const {draw3} = require('./draw-3')
const {draw4} = require('./draw-4')
const {draw5} = require('./draw-5')
const {draw6} = require('./draw-6')
const {draw7} = require('./draw-7')
const {draw8} = require('./draw-8')
const {draw9} = require('./draw-9')

module.exports = {
  48: {draw: draw0, symbol: "0"},
  49: {draw: draw1, symbol: "1"},
  50: {draw: draw2, symbol: "2"},
  51: {draw: draw3, symbol: "3"},
  52: {draw: draw4, symbol: "4"},
  53: {draw: draw5, symbol: "5"},
  54: {draw: draw6, symbol: "6"},
  55: {draw: draw7, symbol: "7"},
  56: {draw: draw8, symbol: "8"},
  57: {draw: draw9, symbol: "9"}
}
