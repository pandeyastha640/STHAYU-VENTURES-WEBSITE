import express from "express"
import { createInquiry, getInquiries, updateInquiryStatus, deleteInquiry } from "../controllers/inquiryController.js"
import { validateInquiryInput } from "../middleware/validation.js"
import { formSubmitLimiter } from "../middleware/rateLimiter.js"

const router = express.Router()

// POST /api/inquiry (and /api/contact) - Submit inquiry
router.post("/", formSubmitLimiter, validateInquiryInput, createInquiry)

// GET /api/inquiry - Review inquiries
router.get("/", getInquiries)

// PATCH /api/inquiry/:id - Update status
router.patch("/:id", updateInquiryStatus)

// DELETE /api/inquiry/:id - Remove inquiry
router.delete("/:id", deleteInquiry)

export default router
