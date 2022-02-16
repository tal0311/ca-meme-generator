'use strict'

var gElCanvas
var gCtx

// !always render here
function memeInit() {
  document.querySelector('.meme-dashboard').hidden = false
  // console.log('init')
  gElCanvas = document.querySelector('canvas')

  // console.log('canvas loaded')
  gCtx = gElCanvas.getContext('2d')
  // console.log(gElCanvas)
  addListeners()
  renderMeme()
}

function renderMeme() {
  let meme = getMemeForeDisplay()
  console.log('meme:', meme)
  let { selectedImgId, selectedLineIdx, lines } = meme
  console.log('idx:', selectedImgId)
  let img = getImageForDisplay(selectedImgId)
  console.log('img:', img)
  let { url } = img
  let { txt, size, align, color, x, y } = lines[0]

  // render img and text on canvas export

  var renderImg = new Image()
  renderImg.src = url

  renderImg.onload = () => {
    renderMemeIng(renderImg)
    drawText(x, y, size, txt, align, color)
  }
}

function renderMemeIng(renderImg) {
  console.log(renderImg)
  gCtx.drawImage(renderImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(x, y, size, txt, align, color) {
  // console.log(x, y, size, txt, align, color)
  // gCtx.lineWidth = 1
  gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = '#ffff'
  gCtx.font = '32px Arial'
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
