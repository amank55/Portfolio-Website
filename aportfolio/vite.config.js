import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Optional: to suppress the 500 KB warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separate all node_modules into vendor chunk
            return 'vendor';
          }
          // You can add more conditions for specific libraries
          if (id.includes('src/components')) {
            return 'components'; // Example for splitting components
          }
        }
      }
    }
  }
});
