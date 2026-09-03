import serverless from "serverless-http"
import app from "../../server/app.js"
import { connectDB } from "../../server/config/db.js"

const serverlessHandler = serverless(app)

export const handler = async (event, context) => {
  // Prevent Lambda from waiting for the Node.js event loop to empty (crucial for MongoDB connections)
  context.callbackWaitsForEmptyEventLoop = false

  try {
    // Ensure MongoDB connection is established
    await connectDB()
  } catch (err) {
    console.error("[Netlify Function] DB connection error:", err)
  }

  return serverlessHandler(event, context)
}
