'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] }]

var CurrMemeIdx = 0

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function getMemeForeDisplay() {
  console.log('get meme for display')
  return gMeme
}

function setCurrMemeIdx() {}
function getImageForDisplay() {
  return gImgs[CurrMemeIdx]
}
