const fs = require('fs');

const WriteFile = (exactPath, data) => new Promise((resolve, reject) => {
  fs.writeFile(exactPath, data, (err) => {
    if (err) return reject(err);
    return resolve();
  })
});

module.exports = WriteFile;