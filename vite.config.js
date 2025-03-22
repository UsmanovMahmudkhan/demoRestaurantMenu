import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served
  base: './',

  // Configure server options
  server: {
    host: '0.0.0.0', // Listen on all local IPs
    port: 3000,
    open: true, // Open browser on server start
  },

  // Configure build options
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },

  // Resolve file extensions
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
});
