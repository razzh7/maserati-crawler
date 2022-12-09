module.exports = {
  addSlider({
    slideLabel,
    slideTitle,
    link,
    imgUrl,
    videoUrl
  }) {
    return `
      INSERT INTO slider1 
      (id, slideLabel, slideTitle, link, imgUrl, videoUrl)
      VALUES 
      (
        ${null},
        '${slideLabel}',
        '${slideTitle}',
        '${link}',
        '${imgUrl}',
        '${videoUrl}'
      );
    `
  }
}