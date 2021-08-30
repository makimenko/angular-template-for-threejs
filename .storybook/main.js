module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../src/**/*.stories.@(js|mdx|ts)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links'
  ]
}
