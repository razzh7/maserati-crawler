module.exports = {
  addSlider({
    slide_label,
    slide_title,
    link,
    img_url,
    video_url
  }) {
    return `
      INSERT INTO slider1 
      (id, slide_label, slide_title, link, img_url, video_url)
      VALUES 
      (
        ${null},
        '${slide_label}',
        '${slide_title}',
        '${link}',
        '${img_url}',
        '${video_url}'
      );
    `
  }
}