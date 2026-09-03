import Inquiry from "../models/Inquiry.js"
import { checkDBStatus, connectDB } from "../config/db.js"

/**
 * @desc    Submit a new inquiry / strategy call booking
 * @route   POST /api/inquiry (and POST /api/contact)
 * @access  Public
 */
export const createInquiry = async (req, res, next) => {
  try {
    const { name, contact, goal, planInterest, source } = req.body

    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null
    const userAgent = req.headers["user-agent"] || null

    let dbState = checkDBStatus()
    if (!dbState.connected) {
      await connectDB()
      dbState = checkDBStatus()
    }

    if (!dbState.connected) {
      console.warn(
        `[Inquiry Submission - DB Pending]: Received inquiry from "${name}" (${contact}), but MongoDB Atlas is not connected yet. Add MONGODB_URI to environment variables to save permanently.`
      )
      // Return helpful response without exposing internal secrets
      return res.status(503).json({
        success: false,
        message: "Database connection is not configured or currently unavailable. Please verify MONGODB_URI.",
        isDBPending: true,
      })
    }

    const newInquiry = await Inquiry.create({
      name,
      contact,
      goal,
      planInterest: planInterest || null,
      source: source || "website_strategy_call",
      metadata: {
        ip: typeof clientIp === "string" ? clientIp.split(",")[0].trim() : null,
        userAgent,
        submittedAt: new Date(),
      },
    })

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been received. Our team will contact you shortly.",
      data: {
        id: newInquiry._id,
        name: newInquiry.name,
        createdAt: newInquiry.createdAt,
      },
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Get all inquiries (with optional administrative status)
 * @route   GET /api/inquiry
 * @access  Private / Internal
 */
export const getInquiries = async (req, res, next) => {
  try {
    const dbState = checkDBStatus()
    if (!dbState.connected) {
      return res.status(503).json({
        success: false,
        message: "Database not connected. Please set MONGODB_URI in .env.",
      })
    }

    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .limit(200)

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Update inquiry status
 * @route   PATCH /api/inquiry/:id
 */
export const updateInquiryStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    )

    if (!updated) {
      return res.status(404).json({ success: false, message: "Inquiry not found" })
    }

    res.status(200).json({ success: true, data: updated })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc    Delete inquiry
 * @route   DELETE /api/inquiry/:id
 */
export const deleteInquiry = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleted = await Inquiry.findByIdAndDelete(id)

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Inquiry not found" })
    }

    res.status(200).json({ success: true, message: "Inquiry deleted successfully" })
  } catch (error) {
    next(error)
  }
}

