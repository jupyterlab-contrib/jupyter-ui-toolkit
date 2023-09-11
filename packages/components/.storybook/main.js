import remarkGfm from 'remark-gfm';

module.exports = {
  stories: [
    '../docs/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.ts'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async config => {
    config.module.rules.push(
      {
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
      },
      {
        test: /\.md$/,
        type: 'asset/source'
      }
    );
    return config;
  },
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  }
};
