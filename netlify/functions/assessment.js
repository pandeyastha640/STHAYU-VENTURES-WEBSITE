import { connectDB, checkDBStatus } from "../../server/config/db.js"
import Assessment from "../../server/models/Assessment.js"

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
      const { name, email, company, teamSize, mainChallenge, mainBottleneck, currentTools } = data

      if (!name || typeof name !== "string" || name.trim() === "") {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: "Validation error: 'name' is required." }),
        }
      }

      if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: "Validation error: A valid 'email' is required." }),
        }
      }

      const validTeamSizes = ["1-10 Employees", "11-50 Employees", "51-200 Employees", "200+ Employees", "Other"]
      let normalizedTeamSize = teamSize
      if (!validTeamSizes.includes(normalizedTeamSize)) {
        if (typeof teamSize === "number" || /^\d+$/.test(teamSize)) {
          const num = Number(teamSize)
          if (num <= 10) normalizedTeamSize = "1-10 Employees"
          else if (num <= 50) normalizedTeamSize = "11-50 Employees"
          else if (num <= 200) normalizedTeamSize = "51-200 Employees"
          else normalizedTeamSize = "200+ Employees"
        } else {
          normalizedTeamSize = "Other"
        }
      }

      const assessment = await Assessment.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: (company || "Self / Undisclosed").trim(),
        teamSize: normalizedTeamSize,
        mainChallenge: (mainChallenge || mainBottleneck || "Manual Data Entry & Copy-Pasting").trim(),
        currentTools: (currentTools || "").trim(),
      })

      console.log(`✅ [Netlify Function: Assessment Created]: ID ${assessment._id} for ${assessment.email}`)

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Automation assessment submitted successfully. Your customized ROI roadmap is generated.",
          data: {
            id: assessment._id,
            name: assessment.name,
            email: assessment.email,
            company: assessment.company,
            createdAt: assessment.createdAt,
          },
        }),
      }
    }

    if (event.httpMethod === "GET") {
      const assessments = await Assessment.find().sort({ createdAt: -1 }).limit(100)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          count: assessments.length,
          data: assessments,
        }),
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: `Method ${event.httpMethod} Not Allowed` }),
    }
  } catch (error) {
    console.error("Netlify assessment function error:", error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Failed to process assessment.",
        error: error.message,
      }),
    }
  }
}
