import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: false,
    allowedHosts: [
      'unrehearsed-nonubiquitary-mercedez.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok.io'
    ],
  },
})
