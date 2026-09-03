// Simple and fast input sanitizer to prevent XSS / script injections
const sanitizeString = (str) => {
  if (typeof str !== "string") return ""
  return str
    .replace(/[<>]/g, "") // Remove HTML tag angle brackets
    .trim()
}

export const validateInquiryInput = (req, res, next) => {
  const errors = {}
  let { name, contact, goal, planInterest, source } = req.body || {}

  name = sanitizeString(name)
  contact = sanitizeString(contact)
  goal = sanitizeString(goal)

  // Validate Name
  if (!name || name.length < 1) {
    errors.name = "Please enter your full name."
  } else if (name.length > 120) {
    errors.name = "Name cannot exceed 120 characters."
  }

  // Validate Contact (Email or WhatsApp Phone)
  if (!contact || contact.length < 3) {
    errors.contact = "Please enter your work email or WhatsApp phone number."
  } else if (contact.length > 150) {
    errors.contact = "Contact information cannot exceed 150 characters."
  }

  // If goal is empty, provide a clean default so leads are never dropped
  if (!goal || goal.trim().length === 0) {
    goal = planInterest
      ? `Interested in ${planInterest} tier - Requesting strategy consultation.`
      : "General strategy session and business automation discovery."
  } else if (goal.length > 3000) {
    errors.goal = "Description is too long (maximum 3000 characters)."
  }

  if (Object.keys(errors).length > 0) {
    const firstErrorMessage = Object.values(errors)[0]
    return res.status(400).json({
      success: false,
      message: firstErrorMessage || "Please fill out all required fields properly.",
      errors,
    })
  }

  // Replace req.body with sanitized values
  req.body = {
    ...req.body,
    name,
    contact,
    goal,
    planInterest: planInterest ? sanitizeString(planInterest) : undefined,
    source: source ? sanitizeString(source) : "website_strategy_call",
  }

  next()
}

export const validateAssessmentInput = (req, res, next) => {
  const errors = {}
  let { name, email, company, teamSize, mainChallenge, currentTools } = req.body || {}

  name = sanitizeString(name)
  email = sanitizeString(email)
  company = sanitizeString(company)
  teamSize = sanitizeString(teamSize)
  mainChallenge = sanitizeString(mainChallenge)
  currentTools = sanitizeString(currentTools)

  // Validate Name
  if (!name || name.length < 1) {
    errors.name = "Your name is required."
  }

  // Validate Work Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    errors.email = "Work email is required."
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid work email address."
  }

  // Validate Company
  if (!company || company.length < 1) {
    errors.company = "Company name is required."
  }

  if (Object.keys(errors).length > 0) {
    const firstErrorMessage = Object.values(errors)[0]
    return res.status(400).json({
      success: false,
      message: firstErrorMessage || "Please correct the highlighted form errors.",
      errors,
    })
  }

  req.body = {
    ...req.body,
    name,
    email: email.toLowerCase(),
    company,
    teamSize: teamSize || "1-10 Employees",
    mainChallenge: mainChallenge || "Manual Data Entry & Copy-Pasting",
    currentTools: currentTools || "",
  }

  next()
}
