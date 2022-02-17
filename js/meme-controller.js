'use strict'

var gElCanvas
var gCtx
var gStartPos
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
  let { selectedImgId, lines } = meme
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
  let { x, y, color, align, txt, size, fontFamily } = line
  // gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = `${size}px ${fontFamily}`
  gCtx.textAlign = align
  gCtx.fillText(txt, x, y, gElCanvas.width)
  gCtx.strokeText(txt, x, y, gElCanvas.width)
}

function onSaveMeme() {
  alert('saved to local storage')
  setMemeToSave()
}

function onAddLIne() {
  creatLine()
  renderMeme()
}

function onRemoveTxt() {
  setRemoveTxt()
  renderMeme()
}

function onchangeLine() {
  setLineIdx()
  // let line = getLien()
  // focusOnline(line)
  //  renderMeme()
}

// !dont work
function focusOnline(line) {
  let { x, y, txt, size } = line
  let width = txt.length * size
  console.log(line)
  gCtx.fillStyle = '#c2c2c2'
  gCtx.fillRect(x - width, y - 100, x + 10, y + 20)
}

function onTxtAline(value) {
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
function onChangeFontFamily(value) {
  console.log(value)
  setFontFamily(value)
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
  let elSelection = document.querySelector('.font-style')
  elSelection.addEventListener('change', (event) =>
    onChangeFontFamily(event.target.value)
  )

  addMouseListeners()
  // addTouchListeners()
  // window.addEventListener('resize', () => {
  //   resizeCanvas()
  //   renderCanvas()
  // })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}

// function addTouchListeners() {
//   gElCanvas.addEventListener('touchmove', onMove)
//   gElCanvas.addEventListener('touchstart', onDown)
//   gElCanvas.addEventListener('touchend', onUp)
// }

// drag & drop controller function
function onDown(ev) {
  const pos = getEvPos(ev)

  if (!isLineClicked(pos)) return
  setLineDrag(true)
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const line = getLien()
  if (line.isDrag) {
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(line, dx, dy)
    gStartPos = pos
    renderMeme()
  }
}

function onUp() {
  setLineDrag(false)
  document.body.style.cursor = 'grab'
}

// get pos of event
function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // if (gTouchEvs.includes(ev.type)) {
  //   ev.preventDefault()
  //   ev = ev.changedTouches[0]
  //   pos = {
  //     x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
  //     y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
  //   }
  // }

  return pos
}
