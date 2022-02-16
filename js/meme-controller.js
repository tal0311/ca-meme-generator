'use strict'

var gElCanvas
var gCtx

function init() {
  console.log('init')
  gElCanvas = document.querySelector('canvas')

  console.log('canvas loaded')
  gCtx = gElCanvas.getContext('2d')
  console.log(gElCanvas)
  // addListeners()
  renderMeme()
}

function renderMeme() {
  console.log('render meme')
  let meme = getMemeForeDisplay()
  let { selectedImgId, selectedLineIdx, lines } = meme
  let img = getImageForDisplay()
  let { id, url, keywords } = img

  // render img on canvas
  var renderImg = new Image()
  renderImg.src = url
  renderImg.onload = () => {
    console.log(renderImg)
    gCtx.drawImage(renderImg, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
