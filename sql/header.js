module.exports = {
  addHeader({ model, brand, ownership}) {
      return `
      INSERT INTO header 
      (id, model, brand, ownership)
      VALUES
      (
        ${null},
        '${model}',
        '${brand}',
        '${ownership}'
      );
    `
  }
}