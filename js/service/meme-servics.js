'use strict'

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] }]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'FIRST LINE',
      size: 45,
      align: 'center',
      color: 'red',
      x: 250,
      y: 50,
    },
    {
      txt: 'SECOND LINE',
      size: 35,
      align: 'center',
      color: 'red',
      x: 250,
      y: 450,
    },
  ],
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

  console.log(gMeme.selectedLineIdx)
}

function setMemeColor(userColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = userColor
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
    console.log(txt)
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
  } else if (keyCode === 13) {
    console.log('enter')
    return
  } else if (keyCode > 65 && keyCode < 90) {
    gMeme.lines[gMeme.selectedLineIdx].txt += value
  }
}

function setMemeIdx() {
  console.log('change meme idx')
}
