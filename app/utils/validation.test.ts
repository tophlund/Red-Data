/**
 * Unit tests for validation utilities
 * Tests the validation functions to ensure they work correctly
 */

import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPassword,
  sanitizeInput,
  isValidModelName
} from './validation'

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('test.email+tag@domain.org')).toBe(true)
    expect(isValidEmail('user123@test-domain.co.uk')).toBe(true)
  })

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false)
    expect(isValidEmail('user@')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('user@domain')).toBe(false)
    expect(isValidEmail('')).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(isValidEmail('  user@example.com  ')).toBe(true) // trims whitespace
    expect(isValidEmail(null as any)).toBe(false)
    expect(isValidEmail(undefined as any)).toBe(false)
    expect(isValidEmail(123 as any)).toBe(false)
  })
})

describe('isValidPassword', () => {
  it('should return true for valid passwords', () => {
    expect(isValidPassword('password123')).toBe(true)
    expect(isValidPassword('MySecure1Pass')).toBe(true)
    expect(isValidPassword('abc12345')).toBe(true)
  })

  it('should return false for passwords that are too short', () => {
    expect(isValidPassword('short1')).toBe(false)
    expect(isValidPassword('abc123')).toBe(false)
  })

  it('should return false for passwords without numbers', () => {
    expect(isValidPassword('passwordwithoutnum')).toBe(false)
    expect(isValidPassword('OnlyLetters')).toBe(false)
  })

  it('should return false for passwords without letters', () => {
    expect(isValidPassword('12345678')).toBe(false)
    expect(isValidPassword('987654321')).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(isValidPassword('')).toBe(false)
    expect(isValidPassword(null as any)).toBe(false)
    expect(isValidPassword(undefined as any)).toBe(false)
    expect(isValidPassword(123 as any)).toBe(false)
  })
})

describe('sanitizeInput', () => {
  it('should remove script tags', () => {
    const maliciousInput = 'Hello <script>alert("xss")</script> World'
    const expected = 'Hello  World'
    expect(sanitizeInput(maliciousInput)).toBe(expected)
  })

  it('should remove javascript: protocol', () => {
    const maliciousInput = 'Click here: javascript:alert("xss")'
    const expected = 'Click here: alert("xss")'
    expect(sanitizeInput(maliciousInput)).toBe(expected)
  })

  it('should trim whitespace', () => {
    expect(sanitizeInput('  hello world  ')).toBe('hello world')
  })

  it('should limit string length', () => {
    const longString = 'a'.repeat(1500)
    const result = sanitizeInput(longString)
    expect(result.length).toBe(1000)
  })

  it('should handle edge cases', () => {
    expect(sanitizeInput('')).toBe('')
    expect(sanitizeInput(null as any)).toBe('')
    expect(sanitizeInput(undefined as any)).toBe('')
    expect(sanitizeInput(123 as any)).toBe('')
  })
})

describe('isValidModelName', () => {
  it('should return true for valid model names', () => {
    expect(isValidModelName('My Model')).toBe(true)
    expect(isValidModelName('Model-123')).toBe(true)
    expect(isValidModelName('Model_Name_2024')).toBe(true)
    expect(isValidModelName('SimpleModel')).toBe(true)
  })

  it('should return false for names that are too short or too long', () => {
    expect(isValidModelName('')).toBe(false)
    expect(isValidModelName('   ')).toBe(false) // only whitespace
    expect(isValidModelName('a'.repeat(101))).toBe(false) // too long
  })

  it('should return false for names with invalid characters', () => {
    expect(isValidModelName('Model@Name')).toBe(false)
    expect(isValidModelName('Model#123')).toBe(false)
    expect(isValidModelName('Model$Name')).toBe(false)
    expect(isValidModelName('Model<script>')).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(isValidModelName('A')).toBe(true) // single character
    expect(isValidModelName('a'.repeat(100))).toBe(true) // exactly 100 chars
    expect(isValidModelName(null as any)).toBe(false)
    expect(isValidModelName(undefined as any)).toBe(false)
    expect(isValidModelName(123 as any)).toBe(false)
  })
}) 