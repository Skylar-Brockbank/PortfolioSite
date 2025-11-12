import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:[
      "3e92fa5a896b.ngrok-free.app"
    ]
  }
})
