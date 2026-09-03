import mongoose from "mongoose"

// Disable buffering globally so queries fail fast with clear errors instead of hanging for 10s
mongoose.set("bufferCommands", false)

// Production-ready MongoDB Atlas fallback URI for seamless Codespace & Netlify execution
const DEFAULT_MONGODB_URI =
  "mongodb+srv://pandeyastha640_db_user:ZAVMkw9Dm7GXja5r@cluster0.a2tuu30.mongodb.net/sthayu_ventures?retryWrites=true&w=majority"

let lastConnectionError = null

// Global connection cache for serverless environments (Netlify Functions / AWS Lambda)
let cached = global._mongooseCache
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null }
}

export const connectDB = async () => {
  // If already connected, return immediately
  if (mongoose.connection.readyState === 1) {
    return true
  }

  const rawUri = process.env.MONGODB_URI
  const uri =
    rawUri && rawUri.trim() !== "" && !rawUri.includes("<username>")
      ? rawUri.trim()
      : DEFAULT_MONGODB_URI

  if (cached.conn && mongoose.connection.readyState === 1) {
    return true
  }

  try {
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 6000,
        connectTimeoutMS: 6000,
      }
      cached.promise = mongoose.connect(uri, opts).then((m) => m)
    }

    cached.conn = await cached.promise
    lastConnectionError = null
    console.log(`\n✅ [MongoDB Atlas]: Connected successfully to host: ${cached.conn.connection.host}, database: ${cached.conn.connection.name}`)
    return true
  } catch (error) {
    cached.promise = null
    cached.conn = null
    lastConnectionError = error
    console.error(`\n❌ [MongoDB Atlas Connection Error]: ${error.message}`)
    console.warn("   Verify your MongoDB Atlas IP Whitelist allows 0.0.0.0/0.\n")
    return false
  }
}

export const checkDBStatus = () => {
  // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
  const state = mongoose.connection.readyState
  return {
    connected: state === 1,
    stateDescription: ["disconnected", "connected", "connecting", "disconnecting"][state] || "unknown",
    lastError: lastConnectionError ? lastConnectionError.message : null,
  }
}

