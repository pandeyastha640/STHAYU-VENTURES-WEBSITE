import express from "express"
import inquiryRoutes from "./inquiryRoutes.js"
import assessmentRoutes from "./assessmentRoutes.js"
import { checkDBStatus } from "../config/db.js"

const router = express.Router()

// Health check endpoint: GET /api/health
router.get("/health", (req, res) => {
  const dbStatus = checkDBStatus()
  res.status(200).json({
    status: "ok",
    service: "Sthayu Ventures Backend API",
    database: {
      connected: dbStatus.connected,
      state: dbStatus.stateDescription,
    },
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  })
})

// Inquiries & Strategy Call Booking
router.use("/inquiry", inquiryRoutes)
// Alias: /api/contact routes to the inquiry router as well
router.use("/contact", inquiryRoutes)

// Automation Assessment Form
router.use("/assessment", assessmentRoutes)

export default router
