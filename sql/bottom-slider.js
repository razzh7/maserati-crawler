module.exports = {
  addSlider({
    slideLabel, 
    subTitle, 
    imgUrl, 
    link
  }) {
    return `
      INSERT INTO slider2 
      (id, slideLabel, subTitle, imgUrl, link)
      VALUES
      (
        ${null},
        '${slideLabel}',
        '${subTitle}',
        '${imgUrl}',
        '${link}'
      )
  `
  }
}