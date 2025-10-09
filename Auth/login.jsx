
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
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden px-6">
      {/* background soft orb (center-fixed, behind content) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 flex items-center justify-center pointer-events-none -z-50"
      >
        <div className="w-[60vw] max-w-[720px] h-[60vw] max-h-[720px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 filter blur-[80px]" />
      </div>

      <section className="w-full max-w-md z-10">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">BGremover</div>
            <div className="text-sm text-gray-500">Professional • Helpful</div>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
          <p className="text-sm text-gray-500 mb-6">
            Sign in to continue to your workspace. Need an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create one
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@company.com"
                aria-label="Email"
              />
            </label>

            <label className="block">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</span>
                <a href="/forgot" className="text-sm text-blue-600 hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
                aria-label="Password"
              />
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">Remember me</span>
              </label>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-200" />
              <span className="text-xs text-gray-400">or continue with</span>
              <hr className="flex-1 border-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-md px-3 py-2 hover:shadow-sm"
                onClick={() => console.log("Sign in with Google")}
              >
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none" aria-hidden>
                  <path d="M44 20H24v8h11.9C34.7 31.9 30 36 24 36c-7 0-13-5.7-13-13s6-13 13-13c3.5 0 6.7 1.3 9.1 3.5l6.1-6.1C35.4 5.2 30.9 3 24 3 12.8 3 3 12.8 3 24s9.8 21 21 21 21-9.8 21-21c0-1.4-.1-2.7-.3-4z" fill="#4285F4"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-md px-3 py-2 hover:shadow-sm"
                onClick={() => console.log("Sign in with SSO")}
              >
                SSO
              </button>
            </div>
          </form>

          <p className="mt-6 text-xs text-gray-400">
            By continuing you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy policy</a>.
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Need help? <a href="/support" className="text-blue-600 hover:underline">Contact support</a>
        </div>
      </section>
    </main>
  );
};
