/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/extension',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  build: {
    outDir: '../../dist/apps/extension',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        index: 'index.html',
        background: 'src/background/index.ts',
        contentScript: 'src/contentScript/index.ts',
        popup: 'src/popup/index.tsx',
        options: 'src/options/index.tsx',
      },
      output: {
        entryFileNames: `[name].js`, // Disables hashing for entry files
        chunkFileNames: `[name].js`, // Disables hashing for chunks
        assetFileNames: `[name].[ext]`, // Disables hashing for other assets like CSS
      },
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/extension',
      provider: 'v8',
    },
  },
});
