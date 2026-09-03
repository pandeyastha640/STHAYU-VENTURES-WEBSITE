import { connectDB, checkDBStatus } from "../../server/config/db.js"

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
}

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: JSON.stringify({ message: "OK" }) }
  }

  await connectDB()
  const dbStatus = checkDBStatus()

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status: "ok",
      service: "Sthayu Ventures Production Serverless API (Netlify Functions)",
      environment: process.env.NODE_ENV || "production",
      timestamp: new Date().toISOString(),
      database: {
        connected: dbStatus.connected,
        state: dbStatus.stateDescription,
      },
    }),
  }
}
