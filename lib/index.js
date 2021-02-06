const generateFiles = require('./utils/generateFiles');


const mainReactCli = async (action, dirName) => {
  try {
    switch (action) {
      case 'c': 
        return await generateFiles(dirName, '/', true);
      case 'a': 
        return await generateFiles(dirName, '/atoms/');
      case 'm': 
        return await generateFiles(dirName, '/molecules/');
      case 'o': 
        return await generateFiles(dirName, '/organisms/');
      case 't': 
        return await generateFiles(dirName, '/templates/');
      default:
        return console.log(`The action '${action}' is not valid`);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = mainReactCli;