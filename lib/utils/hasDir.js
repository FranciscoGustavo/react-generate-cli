const hasDir = (dirName) => {
  const hasDirNames = dirName.split('/');
  return hasDirNames.length > 1;  
}

module.exports = hasDir;