'use strict'

var gElCanvas
var gCtx

// !always render here
function memeInit() {
  document.querySelector('.meme-dashboard').hidden = false
  document.querySelector('.owner').style.display = 'none'
  document.querySelector('nav').style.display = 'none'

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
  console.log(renderImg)
  gCtx.drawImage(renderImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(line) {
  let { x, y, color, align, txt, size } = line
  // gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = `${size}px Impact`
  gCtx.textAlign = align //align text function
  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
}

function onchangeLine() {
  setLineIdx()
}

function onTxtAline(value) {
  console.log(gMeme.selectedLineIdx)
  console.log(value)
  setTxtAlign(value)
}

function onSetLineText(value, lineId) {
  setLineTxt(value, lineId)

  renderMeme()
}

function onColorPIcked(value) {
  const userColor = value
  setMemeColor(userColor)
  renderMeme()
}

function onchangeFontSize(num) {
  setFontSize(+num)
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
