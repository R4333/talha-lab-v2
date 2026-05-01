import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    allowedHosts: ['96f1-103-99-135-214.ngrok-free.app'],
  },
  plugins: [tanstackStart(), nitro(), react()],
})
