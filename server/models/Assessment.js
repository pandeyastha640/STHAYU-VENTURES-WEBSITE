import mongoose from "mongoose"

const assessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [120, "Name cannot exceed 120 characters"],
    },
    email: {
      type: String,
      required: [true, "Work email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid work email address"],
      maxlength: [150, "Email cannot exceed 150 characters"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [1, "Company name is required"],
      maxlength: [200, "Company name cannot exceed 200 characters"],
    },
    teamSize: {
      type: String,
      enum: ["1-10 Employees", "11-50 Employees", "51-200 Employees", "200+ Employees", "Other"],
      default: "1-10 Employees",
    },
    mainChallenge: {
      type: String,
      default: "Manual Data Entry & Copy-Pasting",
      trim: true,
      maxlength: [200, "Main challenge text is too long"],
    },
    currentTools: {
      type: String,
      default: "",
      trim: true,
      maxlength: [500, "Current tools text cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "plan_drafted", "sent", "archived"],
      default: "new",
    },
    metadata: {
      ip: { type: String, default: null },
      userAgent: { type: String, default: null },
      submittedAt: { type: Date, default: Date.now },
    },
  },
  {
    timestamps: true,
  }
)

assessmentSchema.index({ createdAt: -1 })
assessmentSchema.index({ email: 1 })

const Assessment = mongoose.model("Assessment", assessmentSchema)

export default Assessment
