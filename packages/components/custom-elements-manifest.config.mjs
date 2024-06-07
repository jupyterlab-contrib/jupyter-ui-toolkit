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
          if (declaration.tagName && declaration.name.startsWith('Jupyter')) {
            declaration.name = declaration.name.slice(7);
          }
        });
      });
    }
  };
}

export default {
  fast: true,
  // outdir: 'dist',
  dependencies: true,
  globs: ['src/**/index.ts'],
  exclude: ['src/index.ts', 'src/styles', 'src/utilities'],
  plugins: [
    renameClassElement(),
    customElementReactWrapperPlugin({
      outdir: '../react-components/src',
      modulePath: (className, tagName) => '@jupyter/web-components'
    })
  ]
};
