import mongoose from "mongoose"

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

  const uri = process.env.MONGODB_URI

  if (!uri || uri.trim() === "" || uri.includes("<username>")) {
    console.warn(
      "\n⚠️ [MongoDB Atlas]: MONGODB_URI is not configured in environment variables.\n" +
      "   Database operations will be pending.\n" +
      "   To connect to MongoDB Atlas, set MONGODB_URI:\n" +
      "   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/sthayu_ventures\n"
    )
    return false
  }

  if (cached.conn) {
    return true
  }

  try {
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 8000,
        connectTimeoutMS: 8000,
      }
      cached.promise = mongoose.connect(uri, opts).then((m) => {
        return m
      })
    }

    cached.conn = await cached.promise
    console.log(`\n✅ [MongoDB Atlas]: Connected successfully to host: ${cached.conn.connection.host}, database: ${cached.conn.connection.name}`)
    return true
  } catch (error) {
    cached.promise = null
    console.error(`\n❌ [MongoDB Atlas Connection Error]: ${error.message}`)
    console.warn("   Verify your MongoDB Atlas IP Whitelist (Network Access) allows 0.0.0.0/0.\n")
    return false
  }
}

export const checkDBStatus = () => {
  // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
  const state = mongoose.connection.readyState
  return {
    connected: state === 1,
    stateDescription: ["disconnected", "connected", "connecting", "disconnecting"][state] || "unknown",
  }
}

