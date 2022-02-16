'use strict'

var gElCanvas
var gCtx

// !always render here
function memeInit() {
  document.querySelector('.meme-dashboard').hidden = false
  document.querySelector('.owner').style.display = 'none'
  document.querySelector('nav').style.display = 'none'

  gElCanvas = document.querySelector('canvas')

  gCtx = gElCanvas.getContext('2d')

  addListeners()
  renderMeme()
}

function renderMeme() {
  let meme = getMemeForeDisplay()
  let { selectedImgId, selectedLineIdx, lines } = meme
  let img = getImageForDisplay(selectedImgId)
  let { url } = img

  // render img and text on canvas export
  var renderImg = new Image()
  renderImg.src = url
  renderImg.onload = () => {
    renderMemeIng(renderImg)
    lines.forEach((line) => {
      drawText(line)
    })
  }
}

function renderMemeIng(renderImg) {
  gCtx.drawImage(renderImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(line) {
  let { x, y, color, align, txt, size } = line
  // gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = `${size}px Impact`
  gCtx.textAlign = align
  gCtx.fillText(txt, x, y, gElCanvas.width)
  gCtx.strokeText(txt, x, y, gElCanvas.width)
}

function onRemoveTxt() {
  setRemoveTxt()
  renderMeme()
}

function onchangeLine() {
  setLineIdx()
}

function onTxtAline(value) {
  console.log(gMeme.selectedLineIdx)
  console.log(value)
  setTxtAlign(value)
  renderMeme()
}

function onSetLineText(ev) {
  let value = ev.key
  let KeyCode = ev.keyCode
  setLineTxt(value, KeyCode)

  renderMeme()
}

function onColorPIcked(ev) {
  let value = ev.target.value

  setMemeColor(value)
  renderMeme()
}

function onchangeFontSize(num) {
  setFontSize(+num)
  renderMeme()
}

function addListeners() {
  let elColorInput = document.querySelector('input[name="color"]')
  elColorInput.addEventListener('input', (event) => onColorPIcked(event))

  document.addEventListener('keydown', (event) => onSetLineText(event))

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
