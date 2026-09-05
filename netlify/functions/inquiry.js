import { connectDB, checkDBStatus } from "../../server/config/db.js"
import Inquiry from "../../server/models/Inquiry.js"

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json",
}

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: JSON.stringify({ message: "OK" }) }
  }

  try {
    const isConnected = await connectDB()
    const dbStatus = checkDBStatus()

    if (!isConnected && !dbStatus.connected) {
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Database service is temporarily unavailable. Please try again shortly or contact sthayu.ventures@gmail.com.",
          error: dbStatus.lastError || "Database connection unavailable",
        }),
      }
    }

    if (event.httpMethod === "POST") {
      const data = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {})
      const { name, contact, email, phone, goal, planInterest, source } = data

      const contactValue = (contact || email || phone || "").trim()
      const trimmedName = (name || "").trim()

      const errors = {}
      if (!trimmedName) {
        errors.name = "Please enter your name."
      }

      if (!contactValue || contactValue.length < 3) {
        errors.contact = "Please enter your work email or phone number."
      }

      if (Object.keys(errors).length > 0) {
        const firstErrorMessage = Object.values(errors)[0]
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: firstErrorMessage || "Please check your contact details.",
            errors,
          }),
        }
      }

      const defaultGoal = planInterest
        ? `Interested in ${planInterest} tier - Requesting strategy consultation.`
        : "General strategy session and business automation discovery."

      const goalValue = goal && typeof goal === "string" && goal.trim().length > 0
        ? goal.trim()
        : defaultGoal

      const inquiry = await Inquiry.create({
        name: trimmedName,
        contact: contactValue,
        goal: goalValue,
        planInterest: (planInterest || "").trim() || null,
        source: (source || "website_strategy_call").trim(),
      })

      console.log(`✅ [Netlify Function: Inquiry Created]: ID ${inquiry._id} for ${inquiry.contact}`)

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Strategy session request received successfully. We will reach out within 24 hours.",
          data: {
            id: inquiry._id,
            name: inquiry.name,
            contact: inquiry.contact,
            createdAt: inquiry.createdAt,
          },
        }),
      }
    }

    if (event.httpMethod === "GET") {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          count: inquiries.length,
          data: inquiries,
        }),
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: `Method ${event.httpMethod} Not Allowed` }),
    }
  } catch (error) {
    console.error("Netlify inquiry function error:", error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Failed to process inquiry.",
        error: error.message,
      }),
    }
  }
}
