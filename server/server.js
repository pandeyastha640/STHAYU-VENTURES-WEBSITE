import dotenv from "dotenv"
dotenv.config({ override: true })

import app from "./app.js"
import { connectDB } from "./config/db.js"

// Use 5000 by default (ignoring container internal reverse-proxy port 8080)
const PORT = process.env.API_PORT || (process.env.PORT && process.env.PORT !== "8080" ? process.env.PORT : 5000)

// Initialize MongoDB Atlas connection
connectDB()

// Start HTTP server
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n======================================================`)
  console.log(`🚀 Sthayu Ventures Backend API is running on port ${PORT}`)
  console.log(`📍 Health Check: http://localhost:${PORT}/api/health`)
  console.log(`📡 Endpoints:`)
  console.log(`   - POST /api/inquiry (or /api/contact)`)
  console.log(`   - POST /api/assessment`)
  console.log(`======================================================\n`)
})

// Graceful shutdown handling
process.on("SIGINT", () => {
  console.log("\nGracefully shutting down Sthayu Ventures API Server...")
  server.close(() => {
    console.log("Server stopped.")
    process.exit(0)
  })
})

export default app

