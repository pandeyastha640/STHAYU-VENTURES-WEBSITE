import express from "express"
import cors from "cors"
import routes from "./routes/index.js"
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js"
import { apiLimiter } from "./middleware/rateLimiter.js"

const app = express()

// Trust reverse proxies (Netlify Edge, AWS CloudFront, Docker, Cloud Run)
app.set("trust proxy", 1)

// Permissive CORS for public lead collection & admin panel
const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server, curl, and all web origins for public intake
    callback(null, true)
  },
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
}

// Global middlewares
app.use(cors(corsOptions))
app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({ extended: true, limit: "1mb" }))

// Apply rate limiter to all API endpoints
app.use("/api", apiLimiter)

// Mount API routes across multiple path prefixes for both Express & Netlify Functions
app.use("/api", routes)
app.use("/.netlify/functions/api", routes)
app.use("/", routes)

// 404 Handler for undefined API routes
app.use(notFoundHandler)

// Centralized Error Handler
app.use(errorHandler)

export default app
