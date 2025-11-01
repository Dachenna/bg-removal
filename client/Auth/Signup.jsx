import React, { useState } from 'react'
import { FaUser, FaEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export const Signup = ({ navigate }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError("Please fill all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    if (password !== confirm) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)
    try {
      // TODO: replace with real signup API call
      await new Promise((r) => setTimeout(r, 800))
      console.log("signup:", { name, email })
      if (navigate) navigate('/login')
    } catch (err) {
      setError("Signup failed. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center complete">
      <div className="wrapper backdrop-blur-sm shadow-sm">
        <div className="form-box login" role="region" aria-labelledby="signup-title">
          <div className="text-center mb-6">
            <h1 id="signup-title" className="font-header text-2xl mb-1">Create account</h1>
            <p className="font-body text-sm text-gray-600">Start removing unwanted backgrounds — fast and secure</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="input-box">
              <label htmlFor="name" className="sr-only">Full name</label>
              <span className="icons" aria-hidden><FaUser /></span>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="input"
                aria-label="Full name"
                autoComplete="name"
              />
              <label className="floating">Full name</label>
            </div>

            <div className="input-box">
              <label htmlFor="email" className="sr-only">Email</label>
              <span className="icons" aria-hidden><FaEnvelope /></span>
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
              <label className="floating">Email</label>
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
                placeholder="At least 8 characters"
                className="input"
                aria-label="Password"
                autoComplete="new-password"
              />
              <label className="floating">Password</label>
            </div>

            <div className="input-box">
              <label htmlFor="confirm" className="sr-only">Confirm password</label>
              <span className="icons" aria-hidden><RiLockPasswordLine /></span>
              <input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                placeholder="Repeat password"
                className="input"
                aria-label="Confirm password"
                autoComplete="new-password"
              />
              <label className="floating">Confirm password</label>
            </div>

            <div className="remeber flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox" />
                <span>I agree to the <a href="/terms" className="text-blue-600 hover:underline" rel="noopener noreferrer">Terms</a></span>
              </label>
              <a href="#" className="text-blue-600 mb-2 hover:underline">Need help?</a>
            </div>

            <div role="status" aria-live="polite" className="min-h-[1rem]">
              {error && <div className="text-sm text-red-600">{error}</div>}
            </div>

            <button type="submit" className="btn w-full mt-1" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="py-2 text-center text-sm">
            <p>Already have an account? <a href="/login" className="register-link text-blue-600 hover:underline">Log in</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}

