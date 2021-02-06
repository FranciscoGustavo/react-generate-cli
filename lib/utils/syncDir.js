const fs = require('fs');
const createDir= require('./createDir');
const config = require('../config.json');

const syncDir = (dirName) => {
  let emptyDirName = dirName;
  if (config.flat) {
    emptyDirName = emptyDirName.split('/');
    emptyDirName.pop();
    emptyDirName = emptyDirName.join('/');
  }

  if (!fs.existsSync(emptyDirName)) {
    createDir(emptyDirName);
  }
}

module.exports = syncDir;