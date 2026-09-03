import mongoose from "mongoose"

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [120, "Name cannot exceed 120 characters"],
    },
    contact: {
      type: String,
      required: [true, "Work email or WhatsApp phone number is required"],
      trim: true,
      minlength: [3, "Contact information must be at least 3 characters"],
      maxlength: [150, "Contact information cannot exceed 150 characters"],
    },
    goal: {
      type: String,
      required: [true, "Goal or message is required"],
      trim: true,
      minlength: [5, "Goal description must be at least 5 characters"],
      maxlength: [3000, "Goal description cannot exceed 3000 characters"],
    },
    source: {
      type: String,
      default: "website_strategy_call",
      trim: true,
      maxlength: 100,
    },
    planInterest: {
      type: String,
      default: null,
      trim: true,
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "contacted", "qualified", "closed"],
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

// Index for query performance on administrative review
inquirySchema.index({ createdAt: -1 })
inquirySchema.index({ status: 1 })

const Inquiry = mongoose.model("Inquiry", inquirySchema)

export default Inquiry
