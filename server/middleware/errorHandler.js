// 404 Not Found Middleware
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`,
  })
}

// Global Centralized Error Handler
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  // Log server error internally for diagnosis
  console.error(`[API Error] ${req.method} ${req.originalUrl}:`, err.message || err)

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message)
    return res.status(400).json({
      success: false,
      message: "Database validation error",
      errors: messages,
    })
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate entry detected",
    })
  }

  // Generic sanitized server error (no stack trace leaked to user)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === "production"
      ? "An unexpected server error occurred. Please try again later."
      : err.message || "Internal Server Error",
  })
}
