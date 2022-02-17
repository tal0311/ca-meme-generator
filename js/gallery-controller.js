function onInit() {
  renderGallery()
  renderDataList()
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
  console.log('options:', options)

  const strHTMLs = options
    .map((option) => {
      return `
          <option value="${option}">${option}</option>
          `
    })
    .join('')

  document.querySelector('#key-words-container').innerHTML = strHTMLs
}
function onImgSelect(id) {
  setImg(+id)
  let ElGallery = document.querySelector('.gallery')
  ElGallery.hidden = true
  memeInit()
}

function onDataListSort(value) {
  setSortBy(value)
  renderGallery()
}

function onImFlexible() {
  console.log('flexible')

  let meme = getRandomMeme()
  console.log('meme:', meme)

  onImgSelect(meme.id)
}
