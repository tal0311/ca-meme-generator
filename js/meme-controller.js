'use strict'

var gElCanvas
var gCtx

function init() {
  // console.log('init')
  gElCanvas = document.querySelector('canvas')

  // console.log('canvas loaded')
  gCtx = gElCanvas.getContext('2d')
  // console.log(gElCanvas)
  addListeners()
  renderMeme()
}

function renderMeme() {
  // console.log('render meme')
  let meme = getMemeForeDisplay()
  let { selectedImgId, selectedLineIdx, lines } = meme
  let img = getImageForDisplay()
  let { id, url, keywords } = img
  let { txt, size, align, color, x, y } = lines[0]

  console.log(txt)
  // render img and text on canvas export

  var renderImg = new Image()
  renderImg.src = url
  renderImg.id = selectedImgId
  renderImg.onload = () => {
    renderMemeIng(renderImg)
    drawText(x, y, size, txt, align, color)
  }
}

function renderMemeIng(renderImg) {
  gCtx.drawImage(renderImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(x, y, size, txt, align, color) {
  // console.log(x, y, size, txt, align, color)
  // gCtx.lineWidth = 1
  gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = '#ffff'
  gCtx.font = '20px Arial'
  gCtx.textAlign = align
  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
}

function onSetLineText(value, lineId) {
  console.log('onset line text:', value, lineId)
  setLineTxt(value, lineId)

  renderMeme()
}

// listeners

function addListeners() {
  // console.log('add listeners')
  // addMouseListeners()
  // addTouchListeners()
  // window.addEventListener('resize', () => {
  //   resizeCanvas()
  //   renderCanvas()
  // })
}

// function addMouseListeners() {
//   gElCanvas.addEventListener('mousemove', onMove)
//   gElCanvas.addEventListener('mousedown', onDown)
//   gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//   gElCanvas.addEventListener('touchmove', onMove)
//   gElCanvas.addEventListener('touchstart', onDown)
//   gElCanvas.addEventListener('touchend', onUp)
// }
