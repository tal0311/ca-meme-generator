function onInit() {
  renderGallery()
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

function onImgSelect(id) {
  setImg(+id)
  let ElGallery = document.querySelector('.gallery')
  ElGallery.hidden = true
  memeInit()
}
