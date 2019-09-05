import { configure, addParameters} from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
  document.getElementById('root').style.height = '100%';
}

addParameters({
  options: {
    fullScreen: true,
    panelPosition: 'bottom',
    sidebarAnimations: false,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    brandTitle: 'Angular Template for Three.js',
    brandUrl: 'https://github.com/makimenko/angular-template-for-threejs'
  },
});

configure(loadStories, module);
