import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Templete-de-estudos-gustavo-web/' // 👈 isso é importante!
})
