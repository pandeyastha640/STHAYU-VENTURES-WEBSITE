import { connectDB } from "../../server/config/db.js"
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
    await connectDB()

    if (event.httpMethod === "POST") {
      const data = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {})
      const { name, contact, email, phone, goal, planInterest, source } = data

      if (!name || typeof name !== "string" || name.trim() === "") {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: "Validation error: 'name' is required." }),
        }
      }

      const contactValue = contact || email || phone || ""
      if (!contactValue || typeof contactValue !== "string" || contactValue.trim() === "") {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: "Validation error: 'contact' (email or phone) is required." }),
        }
      }

      if (!goal || typeof goal !== "string" || goal.trim().length < 3) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: "Validation error: 'goal' description is required." }),
        }
      }

      const inquiry = await Inquiry.create({
        name: name.trim(),
        contact: contactValue.trim(),
        goal: goal.trim(),
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
