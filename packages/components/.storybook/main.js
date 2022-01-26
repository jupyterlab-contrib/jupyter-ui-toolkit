module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  features: {
    postcss: false
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.ts$/,
      sideEffects: true,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.storybook.json'
          }
        }
      ]
    });

    return config;
  }
};
