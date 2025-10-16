
import React, { useState } from "react";

export const Login = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      // placeholder auth - replace with real API call
      await new Promise((r) => setTimeout(r, 700));
      if (navigate) navigate("/");
      else console.log("Signed in (dev):", email);
    } catch (err) {
      setError("Sign in failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username"  required/>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password"  required/>
        </div>

        <div className="remeber">
          <label><input type="checkbox" />Remeber me</label>
          <a href="#">Forget Password</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account <a href="#">Register</a></p>
        </div>
      </form>
    </main>
  );
};
