import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /<repo>/, so the build and its local preview use that path; the dev server stays at /.
  base: command === 'build' || isPreview ? '/taif-aldehbash-portfolio/' : '/',
}))
