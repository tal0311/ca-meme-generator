function onInit() {
  renderGallery()
  renderDataList()

  renderWordCloud()
}

function renderGallery() {
  const images = getImagesForGallery()
  const strHTMLs = images.map((image) => {
    const { id, url, keywords } = image

    return `
    
      <article style="background-image: url(${url});" class="grid-item" data-keyWord1="${keywords[0]}" data-keyWord2="${keywords[1]}" onclick="onImgSelect('${id}')">
                
      </article>
    
    `
  })

  document.querySelector('.grid-container').innerHTML = strHTMLs.join('')
}

function renderDataList() {
  let options = getOptionsForData()
  const strHTMLs = options
    .map((option) => {
      return `
          <option value="${option}">${option}</option>
          `
    })
    .join('')

  document.querySelector('#key-words-container').innerHTML = strHTMLs
}

function renderWordCloud() {
  words = getWordCloudForDisplay()

  words = words.slice(0, 5)
  console.log(words)

  let strHTMLs = words
    .map((word) => {
      return `<span style="font-size:${getRandomInt(
        10,
        20
      )}px" onclick="wordGrow(this, this.innerText)">${word}</span>`
    })
    .join('')

  document.querySelector('.word-cloud').innerHTML = strHTMLs
}
function onImgSelect(id) {
  setImg(+id)

  memeInit()
}

let gWordSize = 20
function wordGrow(el, innerText) {
  gWordSize += 5
  console.log(el.style.fontSize)
  if (el.style.fontSize > '30px') {
    gWordSize = 20
    innerText = null
    return
  }
  el.style.fontSize = gWordSize + 'px'

  setSortBy(innerText)
  renderGallery()
}

function onDataListSort(value) {
  setSortBy(value)
  renderGallery()
}

function onImFlexible() {
  let meme = getRandomMeme()
  onImgSelect(meme.id)
}
