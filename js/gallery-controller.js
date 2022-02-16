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
    
      <article data-keyWord1="${keywords[0]}" data-keyWord2="${keywords[1]}" onclick="onImgSelect('${id}')">
        <img src="${url}" />
      </article>
    
    `
  })

  document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function onImgSelect(id) {
  console.log(id)
  setImg(+id)

  // hide gallery
  document.querySelector('.gallery').hidden = true
  memeInit()
}
