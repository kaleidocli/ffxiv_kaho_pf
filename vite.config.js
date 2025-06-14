import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
})
// base: '/ffxiv_kaho_pf/',    ----- for when we're deploying to github page with no custom dns
// for more ref: https://vite.dev/guide/static-deploy.html#github-pages