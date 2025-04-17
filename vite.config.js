import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      about: path.resolve(__dirname, 'about.html'),
      contacts: path.resolve(__dirname, 'contacts.html'),
      products: path.resolve(__dirname, 'products.html'),
      products_emulsions: path.resolve(__dirname, 'products-emulsions.html'),
    },
  },
});
