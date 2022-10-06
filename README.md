
# Meme generator V1

Second sprint at Coding Academy programming school.

This is a meme generator.
The entire project works with the canvas HTML element.

The project has the ability to upload photos from the device, 
or alternatively use the device's camera to take photos.


## Code snippet
This is the main function in the application, its job is to render to the user the current data model.
The order of the code in this case is critical, allowing the text to be displayed on over the image at any given time.
```
function renderMeme() {
  let meme = getMemeForeDisplay()
  let { selectedImgId, lines, isPhoto, video } = meme
  let img = getImageForDisplay(selectedImgId)
  let { url } = img

  if (isPhoto) {
    gCtx.drawImage(video, 0, 0, gElCanvas.width, gElCanvas.height)
    lines.forEach((line) => {
      drawText(line)
    })
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
```




## Authors

Tal Amit - Fullstack developer, Coding Academy Teaching assistant
