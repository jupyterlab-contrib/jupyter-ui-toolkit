import { dirname, join } from 'path';
import remarkGfm from 'remark-gfm';
import { default as ResolveTypescriptPlugin} from 'resolve-typescript-plugin';

const config = {
  stories: [
    '../docs/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.ts'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
    // FIXME
    //         remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    '@storybook/addon-webpack5-compiler-swc'
  ],
  webpackFinal: async config => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new ResolveTypescriptPlugin());
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
    name: getAbsolutePath('@storybook/html-webpack5'),
    options: {}
  },
  docs: {
    defaultName: 'Documentation'
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;