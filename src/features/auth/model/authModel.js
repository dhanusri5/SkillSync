// Simulated user storage (in a real app, this would be a database)
let users = [
  { email: "test@example.com", password: "123456", name: "Test User" }
];

export async function loginApi({ email, password }) {
  // Basic validation
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  // For testing: Accept any email/password combination that's valid
  if (email.includes('@') && password.length >= 6) {
    return { 
      success: true, 
      token: "dummy-token", 
      user: { 
        email,
        name: email.split('@')[0] 
      } 
    };
  }

  return { success: false, message: "Invalid credentials. Password should be at least 6 characters." };
}

export async function registerApi({ fullName, email, password }) {
  // Basic validation
  if (!email || !password || !fullName) {
    return { success: false, message: "All fields are required" };
  }

  if (!email.includes('@')) {
    return { success: false, message: "Invalid email format" };
  }

  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters" };
  }

  // Store the new user (in a real app, this would go to a database)
  users.push({ email, password, name: fullName });

  return { success: true, userId: users.length };
}