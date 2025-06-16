/**
 * Validation utilities for common input validation tasks
 */

/**
 * Validates if a string is a valid email address
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Validates if a string meets password requirements
 * - At least 8 characters long
 * - Contains at least one letter and one number
 * @param password - Password string to validate
 * @returns Boolean indicating if password meets requirements
 */
export function isValidPassword(password: string): boolean {
  if (!password || typeof password !== 'string') {
    return false
  }

  // Check minimum length
  if (password.length < 8) {
    return false
  }

  // Check contains at least one letter and one number
  const hasLetter = /[a-zA-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)

  return hasLetter && hasNumber
}

/**
 * Sanitizes user input by trimming whitespace and removing potentially dangerous characters
 * @param input - Input string to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }

  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .substring(0, 1000) // Limit length to prevent abuse
}

/**
 * Validates if a model name is acceptable
 * - Must be between 1-100 characters
 * - Must contain only alphanumeric characters, spaces, hyphens, and underscores
 * @param name - Model name to validate
 * @returns Boolean indicating if model name is valid
 */
export function isValidModelName(name: string): boolean {
  if (!name || typeof name !== 'string') {
    return false
  }

  const trimmedName = name.trim()
  
  // Check length
  if (trimmedName.length < 1 || trimmedName.length > 100) {
    return false
  }

  // Check allowed characters (alphanumeric, spaces, hyphens, underscores)
  const allowedCharsRegex = /^[a-zA-Z0-9\s\-_]+$/
  return allowedCharsRegex.test(trimmedName)
} 