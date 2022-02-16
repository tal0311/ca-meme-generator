function onInit() {
  renderGallery()
}

function renderGallery() {
  console.log('render gallery')

  const images = getImagesForGallery()
  console.log(images)

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
  console.log(id)
  setImg(+id)

  // hide gallery
  let ElGallery = document.querySelector('.gallery')
  ElGallery.hidden = true
  memeInit()
}
