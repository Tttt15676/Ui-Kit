import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
      plugins: [react()],
        base: '/Ui-Kit/', // Must match your repo name exactly with leading/trailing slashes
})
