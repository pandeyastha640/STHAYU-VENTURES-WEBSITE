import express from "express"
import { createAssessment, getAssessments, updateAssessmentStatus, deleteAssessment } from "../controllers/assessmentController.js"
import { validateAssessmentInput } from "../middleware/validation.js"
import { formSubmitLimiter } from "../middleware/rateLimiter.js"

const router = express.Router()

// POST /api/assessment - Submit assessment
router.post("/", formSubmitLimiter, validateAssessmentInput, createAssessment)

// GET /api/assessment - Review assessments
router.get("/", getAssessments)

// PATCH /api/assessment/:id - Update status
router.patch("/:id", updateAssessmentStatus)

// DELETE /api/assessment/:id - Remove assessment
router.delete("/:id", deleteAssessment)

export default router
