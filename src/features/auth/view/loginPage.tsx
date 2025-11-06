import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../controller/authcontroller";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const res = await loginUser({ email, password });
    if (res.success) {
      navigate("/dashboard");
    } else {
      setErr(res.message || "Login failed");
    }
  }
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Login</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button style={{ marginTop: "1rem" }} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}