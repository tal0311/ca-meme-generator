'use strict'

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] }]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'falafel',
      size: 20,
      align: 'center',
      color: 'red',
      x: 250,
      y: 50,
    },
  ],
}

function setMemeColor(userColor) {
  gMeme.lines[0].color = userColor
}

function setImg(id) {
  console.log('set imag')
  gMeme.selectedImgId = id
}

function getMemeForeDisplay() {
  return gMeme
}

function getImageForDisplay(idx) {
  let img = gImgs.find((img) => img.id === idx)
  return img
}

function setLineTxt(value, lineId) {
  gMeme.lines[lineId].txt = value
}

function setMemeIdx() {
  console.log('change meme idx')
}
