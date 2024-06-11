/* global process */
import { customElementReactWrapperPlugin } from 'custom-element-react-wrappers';

/**
 * Custom element manifest plugin to remove the
 * Jupyter prefix in the element class name to
 * get a better naming for the generated react components.
 */
function renameClassElement() {
  return {
    name: 'rename-class-element-plugin',
    packageLinkPhase({ customElementsManifest, context }) {
      customElementsManifest.modules.forEach(module => {
        module.declarations.forEach(declaration => {
          // Remove the prefix `Jupyter` for simpler naming
          if (declaration.tagName && declaration.name.startsWith('Jupyter')) {
            declaration.name = declaration.name.slice(7);
          }
        });
      });
    }
  };
}

const plugins = [renameClassElement()];

if (process.env.BUILD_REACT) {
  plugins.push(
    customElementReactWrapperPlugin({
      outdir: '../react-components/lib',
      modulePath: (className, tagName) => '@jupyter/web-components'
    })
  );
}

export default {
  fast: true,
  outdir: 'dist',
  dependencies: true,
  globs: ['src/**/index.ts'],
  exclude: ['src/index.ts', 'src/styles', 'src/utilities'],
  plugins
};
