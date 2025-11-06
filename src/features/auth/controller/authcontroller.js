import { loginApi, registerApi } from "../model/authModel";

export async function loginUser(credentials) {
  const res = await loginApi(credentials);
  return res;
}

export async function registerUser(data) {
  const res = await registerApi(data);
  return res;
}
