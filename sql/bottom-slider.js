module.exports = {
  addSlider({
    slide_label, 
    sub_title, 
    img_url, 
    link
  }) {
    return `
      INSERT INTO slider2 
      (id, slide_label, sub_title, img_url, link)
      VALUES
      (
        ${null},
        '${slide_label}',
        '${sub_title}',
        '${img_url}',
        '${link}'
      )
  `
  }
}