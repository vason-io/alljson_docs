import path from 'path';
import { Plugin } from '@docusaurus/types';
import validatePeerDependencies from 'validate-peer-dependencies';

validatePeerDependencies(__dirname);

module.exports = function (): Plugin {
  return {
    name: 'themed-zoom',

    getClientModules() {
      return [path.resolve(__dirname, './zoom')];
    },
  };
};
