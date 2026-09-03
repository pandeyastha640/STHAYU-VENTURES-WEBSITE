import mongoose from "mongoose"

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI

  if (!uri || uri.trim() === "" || uri.includes("<username>")) {
    console.warn(
      "\n⚠️ [MongoDB Atlas]: MONGODB_URI is not configured in .env.\n" +
      "   Backend server is running, but database operations will be pending.\n" +
      "   To connect to MongoDB Atlas, add your connection string to .env:\n" +
      "   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/sthayu_ventures\n"
    )
    return false
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log(`\n✅ [MongoDB Atlas]: Connected successfully to host: ${conn.connection.host}`)
    return true
  } catch (error) {
    console.error(`\n❌ [MongoDB Atlas Connection Error]: ${error.message}`)
    console.warn("   Verify your MongoDB Atlas IP Whitelist (Network Access) allows 0.0.0.0/0 or your current server IP.\n")
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
