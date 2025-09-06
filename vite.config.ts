import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["firebase/app", "firebase/firestore", "firebase/analytics"]
  },
  build: {
    rollupOptions: {
      external: [], // don't externalize firebase modules
    },
  },
});
