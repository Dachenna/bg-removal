// import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

export const Authlog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // TODO: wire real auth here
    console.log("submit", { email, password });
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center complete">
      <div className="wrapper backdrop-blur-sm shadow-sm">
        <div className="form-box login" role="region" aria-labelledby="login-title">
          <div className="text-center mb-6">
            <h1 id="login-title" className="font-header text-2xl mb-1">Login</h1>
            <p className="font-body text-sm text-gray-600">A click to remove the unwanted</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="input-box">
              <label htmlFor="email" className="sr-only">Email</label>
              <span className="icons" aria-hidden><FaUser /></span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="youremail@gmail.com"
                className="input"
                aria-label="Email"
                autoComplete="email"
              />
              <label className="floating ">Email</label>
            </div>

            <div className="input-box">
              <label htmlFor="password" className="sr-only">Password</label>
              <span className="icons" aria-hidden><RiLockPasswordLine /></span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="input"
                aria-label="Password"
                autoComplete="current-password"
              />
              <label className="floating">Password</label>
            </div>

            <div className="remeber flex items-center justify-between text-sm">
              <a href="#" className="text-blue-600 mb-2 hover:underline">Forgot password?</a>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <button type="submit" className="btn w-full mt-1">Login</button>
          </form>

          <div className=" py-2 text-center text-sm">
            <p>Don't have an account? <a href="/signup" className="register-link text-blue-600 hover:underline">Signup</a></p>
          </div>
        </div>
      </div>
    </main>
  );
};
