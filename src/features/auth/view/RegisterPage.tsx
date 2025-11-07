import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../controller/authcontroller";
import Button from "../../../components/button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");

    if (password !== confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

    const res = await registerUser({ fullName, email, password });
    if (res.success) {
      navigate("/login");
    } else {
      setErr(res.message || "Registration failed");
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create account</h2>
        <div className="auth-sub">Join Skill Sync to find your perfect team</div>
        {err && <p className="error-msg">{err}</p>}

        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          className="auth-input"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
          autoComplete="name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="auth-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="auth-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          minLength={8}
        />

        <label htmlFor="confirm">Confirm Password</label>
        <input
          id="confirm"
          className="auth-input"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
          minLength={8}
        />

        <Button 
          type="submit" 
          variant="primary"
          size="medium"
          fullWidth
          disabled={!fullName || !email || !password || !confirmPassword}
        >
          Create Account
        </Button>

        <div className="auth-note">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
}
