import type {StorybookConfig} from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    {from: '../src/assets', to: '/assets' }
  ], previewHead: (head) => `
    <style>
    body {
      margin: 0;
      height: 100%;
      padding: 0;
    }
    #storybook-root {
      height: 100%;
    }
    atft-map-controls {
      height: 100%;
    }
    ng-component {
      height: 100%
    }
    </style>
    ${head}
  `,
};
export default config;
