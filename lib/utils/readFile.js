const fs = require('fs');

const ReadFile = async (exactPath) => new Promise((resolve, reject) => {
  fs.readFile(exactPath, 'utf8', (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  })
});

module.exports = ReadFile;