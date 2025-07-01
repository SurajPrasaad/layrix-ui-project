// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginMdx from '@mdx-js/rollup';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePluginMdx({
      jsxImportSource: 'react',
      remarkPlugins: [],
      rehypePlugins: [],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.mdx'],
  },
  optimizeDeps: {
    include: ['@mdx-js/react', 'clsx', 'tailwind-merge'],
  },
});
