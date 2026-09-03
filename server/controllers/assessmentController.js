import Assessment from "../models/Assessment.js"
import { checkDBStatus } from "../config/db.js"

/**
 * @desc    Submit a free automation assessment request
 * @route   POST /api/assessment
 * @access  Public
 */
export const createAssessment = async (req, res, next) => {
  try {
    const { name, email, company, teamSize, mainChallenge, currentTools } = req.body

    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null
    const userAgent = req.headers["user-agent"] || null

    const dbState = checkDBStatus()

    if (!dbState.connected) {
      console.warn(
        `[Assessment Submission - DB Pending]: Received assessment from "${name}" (${email} / ${company}), but MongoDB Atlas is not connected yet. Add MONGODB_URI to .env to save permanently.`
      )
      return res.status(503).json({
        success: false,
        message: "Database connection is not configured or currently unavailable. Please verify MONGODB_URI in .env.",
        isDBPending: true,
      })
    }

    const newAssessment = await Assessment.create({
      name,
      email,
      company,
      teamSize,
      mainChallenge,
      currentTools,
      metadata: {
        ip: typeof clientIp === "string" ? clientIp.split(",")[0].trim() : null,
        userAgent,
        submittedAt: new Date(),
      },
    })

    return res.status(201).json({
      success: true,
      message: "Assessment request submitted successfully. We will prepare your custom roadmap.",
      data: {
        id: newAssessment._id,
        name: newAssessment.name,
        company: newAssessment.company,
        createdAt: newAssessment.createdAt,
      },
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Get assessment submissions (Internal review)
 * @route   GET /api/assessment
 * @access  Private / Internal
 */
export const getAssessments = async (req, res, next) => {
  try {
    const dbState = checkDBStatus()
    if (!dbState.connected) {
      return res.status(503).json({
        success: false,
        message: "Database not connected. Please set MONGODB_URI in .env.",
      })
    }

    const assessments = await Assessment.find()
      .sort({ createdAt: -1 })
      .limit(200)

    res.status(200).json({
      success: true,
      count: assessments.length,
      data: assessments,
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Update assessment status
 * @route   PATCH /api/assessment/:id
 */
export const updateAssessmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const updated = await Assessment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    )

    if (!updated) {
      return res.status(404).json({ success: false, message: "Assessment not found" })
    }

    res.status(200).json({ success: true, data: updated })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Delete assessment
 * @route   DELETE /api/assessment/:id
 */
export const deleteAssessment = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleted = await Assessment.findByIdAndDelete(id)

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Assessment not found" })
    }

    res.status(200).json({ success: true, message: "Assessment deleted successfully" })
  } catch (error) {
    next(error)
  }
}

