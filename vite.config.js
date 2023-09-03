import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        title: 'Lainey Creighton | Software Developer',
      },
      external: ['slick-carousel/slick/slick.css'],
    },
  },
})
