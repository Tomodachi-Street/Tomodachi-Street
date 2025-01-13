import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  base: "https://derrickeberlein.dev/",
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      tagcloud: '/node_modules/tagcloud/jquery.tagcloud.js',
    },
  },
  define: {
    $: 'jquery',
    jQuery: 'jquery',
  },
});