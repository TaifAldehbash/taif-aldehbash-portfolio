import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the domain root (Vercel). The GitHub Pages workflow sets BASE_PATH to /<repo>/.
  base: process.env.BASE_PATH ?? '/',
})
