var gSortBy = null

var gWordCloud

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] },
  { id: 2, url: 'img/2.jpg', keywords: ['puppy', 'cute'] },
  { id: 3, url: 'img/3.jpg', keywords: ['baby', 'cute', 'puppy'] },
  { id: 4, url: 'img/4.jpg', keywords: ['cat', 'sleep'] },
  { id: 5, url: 'img/5.jpg', keywords: ['baby', 'mad'] },
  { id: 6, url: 'img/6.jpg', keywords: ['heir', 'man'] },
  { id: 7, url: 'img/7.jpg', keywords: ['baby', 'cute'] },
  { id: 8, url: 'img/8.jpg', keywords: ['mad'] },
  { id: 9, url: 'img/9.jpg', keywords: ['baby', 'cute'] },
  { id: 10, url: 'img/10.jpg', keywords: ['politics', 'obama'] },
  { id: 11, url: 'img/11.jpg', keywords: ['man', 'basketball'] },
  { id: 12, url: 'img/12.jpg', keywords: ['zadik', 'man'] },
  { id: 13, url: 'img/13.jpg', keywords: ['lio', 'man'] },
  { id: 14, url: 'img/14.jpg', keywords: ['matrix', 'man'] },
  { id: 15, url: 'img/15.jpg', keywords: ['actor', 'man'] },
  { id: 16, url: 'img/16.jpg', keywords: ['actor', 'man'] },
  { id: 17, url: 'img/17.jpg', keywords: ['putin', 'politics'] },
  { id: 18, url: 'img/18.jpg', keywords: ['toy'] },
]

function setSortBy(value) {
  if (!value) {
    gSortBy = null
    return
  } else gSortBy = value
}

function getImagesForGallery() {
  if (gSortBy) {
    let filtered = gImgs.filter((img) => img.keywords.includes(gSortBy))
    gSortBy = null
    return filtered
  }
  return gImgs
}

function getWordCloudForDisplay() {
  return getOptionsForData()
}

function getOptionsForData() {
  let options = []
  gImgs.forEach((img) => {
    img.keywords.forEach((word) => {
      if (!options.includes(word)) {
        options.push(word)
      }
    })
  })
  return options
}

function getRandomMeme() {
  let idx = getRandomInt(0, gImgs.length - 1)

  let meme = gImgs.find((img) => img.id === idx)
  return meme
}
