import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import mfConfig from './module-federation.config.js';
export default defineConfig({
  server: {
    port: 3001,
  },
  moduleFederation: { options: mfConfig },
  plugins: [pluginReact()],
});