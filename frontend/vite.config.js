import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': ' https://note-taking-orpin.vercel.app', // https://note-taking-orpin.vercel.app , http://localhost:4001
    },
  },
  plugins: [react(),tailwindcss(),],
})
