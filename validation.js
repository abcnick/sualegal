// validation.js - Form validation module (testable)

const VALIDATION_RULES = {
  nombre: { required: true, maxLength: 100 },
  email: { required: true, maxLength: 254, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  telefono: { required: false, maxLength: 20 },
  mensaje: { required: true, maxLength: 1000 }
};

/**
 * Validates a single field by name and value.
 * @param {string} fieldName - The name of the field to validate
 * @param {string} value - The value to validate
 * @returns {{ valid: boolean, message: string }}
 */
function validateField(fieldName, value) {
  const rules = VALIDATION_RULES[fieldName];
  if (!rules) return { valid: true, message: '' };

  const strValue = value == null ? '' : String(value);

  // Required check
  if (rules.required && strValue.trim() === '') {
    return { valid: false, message: 'Este campo es obligatorio' };
  }

  // Skip further validation for optional empty fields
  if (!rules.required && strValue.trim() === '') {
    return { valid: true, message: '' };
  }

  // Max length check
  if (rules.maxLength && strValue.length > rules.maxLength) {
    return { valid: false, message: `Máximo ${rules.maxLength} caracteres permitidos` };
  }

  // Pattern check (email)
  if (rules.pattern && !rules.pattern.test(strValue)) {
    return { valid: false, message: 'Por favor ingrese un correo electrónico válido' };
  }

  return { valid: true, message: '' };
}

/**
 * Validates all fields in a form data object.
 * @param {Object} formData - Object with fieldName: value pairs
 * @returns {{ valid: boolean, errors: Object }}
 */
function validateForm(formData) {
  const errors = {};
  let valid = true;

  for (const [fieldName, value] of Object.entries(formData)) {
    const result = validateField(fieldName, value);
    if (!result.valid) {
      errors[fieldName] = result.message;
      valid = false;
    }
  }

  return { valid, errors };
}

// Export for both browser and Node.js/test environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateField, validateForm, VALIDATION_RULES };
}
