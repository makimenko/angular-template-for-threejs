import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
  document.getElementById('root').style.height = '100%';
}

configure(loadStories, module);
