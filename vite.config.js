import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'groq-sdk': '/node_modules/groq-sdk/dist/index.js'
    }
  }
})
