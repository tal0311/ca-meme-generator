'use strict'

const gMemeStorageKey = 'Memes'

const gMemes = []

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'NEW LINE',
      size: 45,
      align: 'center',
      color: 'red',
      x: 250,
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

function setLineTxt(value, keyCode) {
  let txt = gMeme.lines[gMeme.selectedLineIdx].txt

  if (keyCode === 8) {
    txt = txt.substring(0, txt.length - 1)

    gMeme.lines[gMeme.selectedLineIdx].txt = txt
  } else if (keyCode === 13) return
  else if ((keyCode >= 65 && keyCode <= 90) || keyCode === 32) {
    gMeme.lines[gMeme.selectedLineIdx].txt += value
  }
}

// function setMemeIdx() {
//   console.log('change meme idx')
// }

function creatLine() {
  let line = {
    txt: 'NEW LINE',
    size: 45,
    align: 'center',
    color: 'red',
    x: 250,
    y: getRandomPosLine(0, gElCanvas.height),
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
  // console.log('curr line:', currLine)
  return currLine
}

function moveLine(line, dx, dy) {
  line.x += dx
  line.y += dy
}

function _saveMemeToStorage(key, val) {
  saveToStorage(key, val)
}
