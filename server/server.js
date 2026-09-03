import dotenv from "dotenv"
dotenv.config({ override: true })

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import routes from "./routes/index.js"
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js"
import { apiLimiter } from "./middleware/rateLimiter.js"

const app = express()
// Use 5000 by default (ignoring container internal reverse-proxy port 8080)
const PORT = process.env.API_PORT || (process.env.PORT && process.env.PORT !== "8080" ? process.env.PORT : 5000)

// Allowed origins for CORS
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim())
  : [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ]

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true)
    
    // In development or if origin matches allowed list
    if (
      process.env.NODE_ENV !== "production" ||
      allowedOrigins.some((allowed) => origin === allowed || origin.endsWith(".run.app"))
    ) {
      return callback(null, true)
    }

    return callback(new Error("CORS policy violation: Access not allowed from this origin."))
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}

// Global middlewares
app.use(cors(corsOptions))
app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({ extended: true, limit: "1mb" }))

// Apply rate limiter to all API endpoints
app.use("/api", apiLimiter)

// Mount API routes
app.use("/api", routes)

// 404 Handler for undefined API routes
app.use(notFoundHandler)

// Centralized Error Handler
app.use(errorHandler)

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
