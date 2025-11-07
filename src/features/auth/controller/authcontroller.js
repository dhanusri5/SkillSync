import { loginApi, registerApi } from "../model/authModel";

/**
 * Handles user login
 * @param {Object} credentials - User credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<{ success: boolean, message?: string, token?: string }>}
 */
export async function loginUser(credentials) {
  try {
    // Input validation
    if (!credentials.email || !credentials.password) {
      return { success: false, message: "Email and password are required" };
    }

    if (!credentials.email.includes('@')) {
      return { success: false, message: "Please enter a valid email" };
    }

    if (credentials.password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters" };
    }

    // Call login API
    const res = await loginApi(credentials);
    
    if (res.success) {
      // Store auth token if needed
      if (res.token) {
        localStorage.setItem('authToken', res.token);
      }
      return res;
    }

    return { 
      success: false, 
      message: res.message || "Invalid credentials" 
    };
  } catch (error) {
    console.error('Login error:', error);
    return { 
      success: false, 
      message: "An error occurred during login" 
    };
  }
}

/**
 * Handles user registration
 * @param {Object} data - Registration data
 * @param {string} data.fullName - User's full name
 * @param {string} data.email - User's email
 * @param {string} data.password - User's password
 * @returns {Promise<{ success: boolean, message?: string, userId?: number }>}
 */
export async function registerUser(data) {
  try {
    // Input validation
    if (!data.fullName || !data.email || !data.password) {
      return { success: false, message: "All fields are required" };
    }

    if (!data.email.includes('@')) {
      return { success: false, message: "Please enter a valid email" };
    }

    if (data.password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters" };
    }

    if (data.fullName.length < 2) {
      return { success: false, message: "Please enter a valid name" };
    }

    // Call register API
    const res = await registerApi(data);
    
    if (res.success) {
      return res;
    }

    return { 
      success: false, 
      message: res.message || "Registration failed" 
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      success: false, 
      message: "An error occurred during registration" 
    };
  }
}
