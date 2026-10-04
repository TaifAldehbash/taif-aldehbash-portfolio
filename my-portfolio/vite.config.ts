import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/; the deploy workflow sets
  // VITE_BASE_PATH accordingly. Locally and on Vercel/Netlify it stays "/".
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [tailwindcss(), react()],
})
