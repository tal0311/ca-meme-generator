'use strict'

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] }]

var gCurrMemeIdx = 0

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'falafel',
      size: 20,
      align: 'left',
      color: 'red',
      x: 50,
      y: 50,
    },
  ],
}

function getMemeForeDisplay() {
  // console.log('get meme for display')
  return gMeme
}

function setCurrMemeIdx() {}
function getImageForDisplay() {
  return gImgs[gCurrMemeIdx]
}

function setLineTxt(value, lineId) {
  gMeme.lines[lineId].txt = value
}

function setMemeIdx() {
  console.log('change meme idx')
}
