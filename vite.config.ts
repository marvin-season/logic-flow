import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6173,
    host: true,
    proxy: {
      "/api-ai": {
        target: "http://127.0.0.1:11434/",
        rewrite: (path) => path.replace(/^\/api-ai/, ""),
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
