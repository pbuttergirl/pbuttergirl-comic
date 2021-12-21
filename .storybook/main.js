module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: config => {
    // https://github.com/storybookjs/storybook/issues/4082#issuecomment-758272734
    config.node = {
      fs: 'empty',
      tls: 'empty',
      net: 'empty',
      module: 'empty',
      console: true,
    };

    return config;
  },
};
