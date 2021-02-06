const config = require('../config.json');
const hasDir = require('./hasDir');
const syncDir = require('./syncDir');
const createComponent = require('./createComponent');

const generateFiles = async (dirName, path, customPath = false) => {
  const DEFAULT_PATH = `${config.path}/components${path}`;
  let exactDir = hasDir(dirName) && customPath 
    ? dirName 
    : hasDir(dirName) && !customPath 
      ? DEFAULT_PATH + dirName.split('/').pop()
      : DEFAULT_PATH + dirName;
  
    syncDir(exactDir);
    await createComponent(exactDir);
    console.log('Component created successfully');
}

module.exports = generateFiles;