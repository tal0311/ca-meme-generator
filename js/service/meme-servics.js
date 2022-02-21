'use strict'

const gMemeStorageKey = 'Memes'

const gMemes = []

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'add text',
      size: 45,
      align: 'center',
      color: 'red',
      x: 200,
      y: 50,
    },
  ],
}

function setMemeToSave() {
  gMemes.push(gMeme)
  _saveMemeToStorage(gMemeStorageKey, gMemes)
}

function setRemoveTxt() {
  console.log((gMeme.lines[gMeme.selectedLineIdx].txt = ' '))
}

function setTxtAlign(value) {
  gMeme.lines[gMeme.selectedLineIdx].align = value
}

function setLineIdx() {
  if (gMeme.lines.length - 1 > gMeme.selectedLineIdx) {
    gMeme.selectedLineIdx++
  } else gMeme.selectedLineIdx = 0
}

function setMemeColor(userColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = userColor
}

function setFontFamily(value) {
  let line = gMeme.lines[gMeme.selectedLineIdx]
  line.fontFamily = value
}

function setFontSize(num) {
  gMeme.lines[gMeme.selectedLineIdx].size += num
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function getMemeForeDisplay() {
  return gMeme
}

function getImageForDisplay(idx) {
  let img = gImgs.find((img) => img.id === idx)
  return img
}

function setLineTxt(value) {
  console.log(value)
  let line = getLien()
  line.txt = value
}

function creatLine() {
  let line = {
    txt: 'add your text',
    size: 45,
    align: 'center',
    color: 'red',
    x: 250,
    y: getRandomPosLine(0, gElCanvas.height - 100),
    isDrag: true,
  }

  gMeme.lines.push(line)
  console.log(gMeme.lines)
}

function getRandomPosLine(min, max) {
  return getRandomInt(min, max)
}

// drag & drop service functions
function isLineClicked(clickedPos) {
  let currLine = gMeme.lines[gMeme.selectedLineIdx]
  const { x, y } = currLine
  const distance = Math.sqrt((x - clickedPos.x) ** 2 + (y - clickedPos.y) ** 2)

  return distance <= currLine.size + currLine.txt.length
}

function setLineDrag(isDrag) {
  gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function getLien() {
  const currLine = gMeme.lines[gMeme.selectedLineIdx]
  return currLine
}

function moveLine(line, dx, dy) {
  line.x += dx
  line.y += dy
}

function _saveMemeToStorage(key, val) {
  saveToStorage(key, val)
}

// take photo service
function getMedia(video) {
  navigator.mediaDevices?.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream
    video.play()
  })
}

function setIsPhoto(value) {
  gMeme.isPhoto = value
}

function setVideo(video) {
  gMeme.video = video
}
