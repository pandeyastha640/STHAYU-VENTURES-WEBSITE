import rateLimit from "express-rate-limit"

// Limit form submissions to 15 per 15-minute window per IP
export const formSubmitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // max 15 submissions per IP
  standardHeaders: true,
  legacyHeaders: false,
  validate: { ip: false, xForwardedForHeader: false },
  message: {
    success: false,
    message: "Too many submissions from this connection. Please wait a few minutes before trying again.",
  },
})

// General API request limiter
export const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120, // 120 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  validate: { ip: false, xForwardedForHeader: false },
  message: {
    success: false,
    message: "Too many requests. Please slow down.",
  },
})

