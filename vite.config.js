import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor-react"
          }
          if (id.includes("node_modules/motion")) {
            return "vendor-motion"
          }
          if (id.includes("node_modules/gsap")) {
            return "vendor-gsap"
          }
        },
      },
    },
  },
})