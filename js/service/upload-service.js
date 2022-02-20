function uploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    document.querySelector('.share-container').innerHTML = `
        <a class="fa-brands fa-facebook-square" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           
        </a>

        <a class="fa-brands fa-whatsapp-square" title="share on whatsApp" target="_blank" href="${whatsAppApi}${encodedUploadedImgUrl}">
        
        </a>
       `
  }

  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)

  fetch('//ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.text())
    .then((url) => {
      console.log('Got back live url:', url)
      onSuccess(url)
    })
    .catch((err) => {
      console.error(err)
    })
}

//whats App
const whatsAppApi = 'https://wa.me/?text=urlencodedtext'
