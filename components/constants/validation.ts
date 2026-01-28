// Validation utility functions

export type ValidationResult = {
  isValid: boolean;
  error: string;
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  return { isValid: true, error: "" };
};

/**
 * Validate username format
 */
export const validateUsername = (username: string): ValidationResult => {
  if (!username.trim()) {
    return { isValid: false, error: "Username is required" };
  }

  if (username.length < 3) {
    return { isValid: false, error: "Username must be at least 3 characters" };
  }

  if (username.length > 20) {
    return { isValid: false, error: "Username must be less than 20 characters" };
  }

  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    return { isValid: false, error: "Username can only contain letters, numbers, and underscores" };
  }

  return { isValid: true, error: "" };
};

/**
 * Validate username or email
 */
export const validateUsernameOrEmail = (value: string): ValidationResult => {
  if (!value.trim()) {
    return { isValid: false, error: "Username or email is required" };
  }

  // Check if it looks like an email
  if (value.includes("@")) {
    return validateEmail(value);
  } else {
    return validateUsername(value);
  }
};

/**
 * Validate password
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (password.length < 8) {
    return { isValid: false, error: "Password must be at least 8 characters" };
  }

  if (password.length > 50) {
    return { isValid: false, error: "Password must be less than 50 characters" };
  }

  // Check for at least one letter and one number
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!hasLetter || !hasNumber) {
    return { isValid: false, error: "Password must contain both letters and numbers" };
  }

  return { isValid: true, error: "" };
};

/**
 * Validate login form
 */
export const validateLoginForm = (
  usernameOrEmail: string,
  password: string
): { isValid: boolean; errors: { usernameOrEmail: string; password: string } } => {
  const usernameOrEmailValidation = validateUsernameOrEmail(usernameOrEmail);
  const passwordValidation = validatePassword(password);

  return {
    isValid: usernameOrEmailValidation.isValid && passwordValidation.isValid,
    errors: {
      usernameOrEmail: usernameOrEmailValidation.error,
      password: passwordValidation.error,
    },
  };
};

/**
 * Validate register form
 */
export const validateRegisterForm = (
  username: string,
  email: string,
  password: string
): { isValid: boolean; errors: { username: string; email: string; password: string } } => {
  const usernameValidation = validateUsername(username);
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  return {
    isValid: usernameValidation.isValid && emailValidation.isValid && passwordValidation.isValid,
    errors: {
      username: usernameValidation.error,
      email: emailValidation.error,
      password: passwordValidation.error,
    },
  };
};
