import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  base: "https://tomodachistreet.org/",
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
  define: {
    $: 'jquery',
    jQuery: 'jquery',
  },
});