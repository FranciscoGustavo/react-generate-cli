const ReadFile = require('./readFile');
const WriteFile = require('./writeFile');
const { DEFAULT_COMPONENT, DEFAULT_STYLES } = require('../templates');
const config = require('../config.json');

const createComponent = async (path) => {
  const hasStyles = config.css ? '.css' : config.styledComponents ? '.js' : false;
  const componentName = path.split('/').pop();
  const exactPath = config.flat ? `${path}.jsx` : `${path}/index.jsx`;
  const exactStylesPath = config.flat ? `${path}${hasStyles}` : `${path}/styles${hasStyles}`;
  
  let componentData = await ReadFile(DEFAULT_COMPONENT);
  const stylesData = hasStyles === '.js' ? await ReadFile(DEFAULT_STYLES) : hasStyles === '.css' ? '' : null;
  
  componentData = componentData.replace(/DefaultComponent/g, componentName);

  if (stylesData === '' && hasStyles === '.css') {
    componentData = componentData.replace('StylesName', `import './${config.flat ? componentName : 'styles'}${hasStyles}';\n`)
  } else if (stylesData && hasStyles === '.js') {
    componentData = componentData.replace('StylesName', `import { } from './${config.flat ? componentName : 'styles'}${hasStyles}';\n`);
  } else {
    componentData = componentData.replace('StylesName', '');
  }

  await WriteFile(exactPath, componentData);
  if (stylesData === '' || stylesData) {
    await WriteFile(exactStylesPath, stylesData);
  }
}

module.exports = createComponent;