import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/; the deploy workflow sets
  // VITE_BASE_PATH accordingly. Locally and on Vercel/Netlify it stays "/".
  base: process.env.VITE_BASE_PATH ?? '/',
  define: {
    // ISO date of the build, surfaced on the page as the revision date so the
    // site never pretends to have been written today.
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  plugins: [tailwindcss(), react()],
})
