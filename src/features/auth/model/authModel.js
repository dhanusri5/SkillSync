export async function loginApi({ email, password }) {

    if (email === "test@example.com" && password === "123456") {
      return { success: true, token: "dummy-token", user: { name: "Gani" } };
    }
    return { success: false, message: "Invalid credentials" };
  }
  
  export async function registerApi({ name, email, password }) {
    // mock for now
    return { success: true, userId: 1 };
  }
  