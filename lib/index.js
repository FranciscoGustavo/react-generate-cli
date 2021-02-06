const {
  hasDir,
  syncDir,
  createComponent
} = require('./utils');

const mainReactCli = (action, dirName) => {
  switch (action) {
    case 'c':
      const DEFAULT_PATH = './src/components/';
      let exactDir = dirName;
      if (!hasDir(dirName)) {
        exactDir = DEFAULT_PATH + dirName;
      }
      syncDir(exactDir);
      createComponent(exactDir);
      return console.log('Component created successfully');
    case 'a':
      return console.log('Atom');
    case 'm':
      return console.log('Molecule');
    case 'o':
      return console.log('Organism');
    case 't':
      return console.log('Template');
    default:
      return console.log(`The action '${action}' is not valid`);
  }
}

module.exports = mainReactCli;