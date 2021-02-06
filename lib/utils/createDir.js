const fs = require('fs');

const createDir = (dir) => {
  const chunksDir = dir.split('/');
  const exactDir = []
  for (let i = 0; i <= chunksDir.length; i++) {
    exactDir.push(chunksDir.join('/'));
    chunksDir.pop();
  }

  exactDir.reverse();
  exactDir.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
}

module.exports = createDir;