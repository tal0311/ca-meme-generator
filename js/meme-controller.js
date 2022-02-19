'use strict'

var gElCanvas
var gCtx
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
// !always render here
function memeInit() {
  document.querySelector('.meme-dashboard').hidden = false
  document.querySelector('.owner').style.display = 'none'
  document.querySelector('nav').style.display = 'none'
  document.querySelector('.gallery-active').classList.remove('active')

  gElCanvas = document.querySelector('canvas')

  gCtx = gElCanvas.getContext('2d')

  addListeners()
  renderMeme()
}

function renderMeme() {
  let meme = getMemeForeDisplay()
  let { selectedImgId, lines, isPhoto, video } = meme
  let img = getImageForDisplay(selectedImgId)
  let { url } = img

  // render img and text on canvas export

  if (isPhoto) {
    gCtx.drawImage(video, 0, 0, gElCanvas.width, gElCanvas.height)
    lines.forEach((line) => {
      drawText(line)
    })
    return
  }

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
  let line = getLien()
  focusOnline(line)
  // renderMeme()
}

// !dont work
function focusOnline(line) {
  console.log(line)
  // gCtx.fillStyle = '#c2c2c2'

  let props = getTxtProps()

  renderRectToLine(props)
}

function getTxtProps() {
  let line = getLien()
  let txtProps = gCtx.measureText(line.txt)
  console.log('line:', line)

  let height = txtProps.fontBoundingBoxAscent + txtProps.fontBoundingBoxDescent
  // console.log('height:', height)
  let width = txtProps.width
  // console.log('width:', width)
  let txtLeft = txtProps.actualBoundingBoxLeft
  // console.log('txtLeft:', txtLeft)
  let txtRight = txtProps.actualBoundingBoxRight
  // console.log('txtRight:', txtRight)

  return [{ width, txtLeft, txtRight, height }, { ...line }]
}

function renderRectToLine(props) {
  console.log(props)
  let [txtProps, line] = props
  console.log(txtProps)
  console.log(line)
  let { height, width, txtLeft, txtRight } = txtProps
  // console.log('txtProps:', txtProps)

  let { x, y, size, align } = line
  // let { width, txtLeft, txtRight, height } = txtProps
  gCtx.beginPath()

  gCtx.strokeStyle = 'red'

  console.log('pk')

  if (align === 'right') x = txtRight
  if (align === 'left') x = txtRight
  if (align === 'center') x = txtLeft

  gCtx.strokeRect(0, y - height + 10, gElCanvas.width, height)
  gCtx.closePath()
  setTimeout(() => {
    renderMeme()
  }, 1000)
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
  addTouchListeners()
  // window.addEventListener('resize', () => {
  //   resizeCanvas()
  //   renderMeme()
  // })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

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
    let { x, y } = pos
    const dx = x - gStartPos.x
    const dy = y - gStartPos.y
    moveLine(line, dx, dy)
    gStartPos = pos
    renderMeme()
  }
}

function onUp() {
  console.log('up')
  setLineDrag(false)
  document.body.style.cursor = 'pointer'
}

// get pos of event
function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }

  return pos
}

function downloadImg(elLink) {
  var imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}

// take photo
function onUseCamera() {
  console.log('ok')
  let elVideoContainer = document.querySelector('.video-container')
  elVideoContainer.style.opacity = '1'
  let video = document.querySelector('#video')
  getMedia(video)
}

function onTakePhoto() {
  console.log('take photo')
  // let elTakePhotoBtn= document.querySelector('button .take-photo')
  let video = document.querySelector('#video')
  setIsPhoto(true)
  setVideo(video)
  renderMeme()
  console.log(video)
}

function onShare() {
  uploadImg()
}

// function resizeCanvas() {
//   const elContainer = document.querySelector('.canvas-container')
//   gElCanvas.width = elContainer.offsetWidth
//   gElCanvas.height = elContainer.offsetHeight
//   console.log(gElCanvas.width, elContainer.offsetWidth)
// }
