import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";
import SocialLogin from "../../components/reusable/Icons/SocialLogin";
import { supabase } from "../../superbase/superbase";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      if (error.message === "Email not confirmed") {
        setError(
          "Please confirm your email before signing in. Check your inbox for the confirmation link.",
        );
      } else {
        setError(error.message);
      }
      return;
    }

    if (data.session) {
      navigate("/dashboard");
    }
  }

  async function handleForgotSubmit(e) {
    e.preventDefault();
    setResetError("");
    setResetLoading(true);

    // supabase.auth.resetPasswordForEmail() sends an email with a link.
    // redirectTo tells Supabase where to send the user AFTER they click
    // that link — it must point at our ResetPassword page, and this exact
    // URL also needs to be added to Supabase's allowed Redirect URLs list
    // (Authentication → URL Configuration) or the link won't work.
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setResetLoading(false);

    if (error) {
      setResetError(error.message);
      return;
    }

    setResetSent(true);
  }

  function closeForgotModal() {
    setShowForgotModal(false);
    setResetEmail("");
    setResetSent(false);
    setResetError("");
  }

  return (
    <div className="min-h-screen bg-[#efece5] flex flex-col md:flex-row">
      {/* Left: image panel */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-linear-to-br from-[#502D55] to-[#935073] p-10">
        <h1 className="text-[#F8F4E9] text-3xl font-bold mb-6">SPENDLY!</h1>

        <div className="relative max-w-md w-full rounded-2xl overflow-hidden">
          <img
            src="/signinimage.webp"
            alt="Signinillustration"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#502D55]/40 to-[#935073]/40" />
        </div>
      </div>

      {/* Mobile-only top banner */}
      <div className="relative md:hidden bg-linear-to-br from-[#502D55] to-[#935073] h-40 rounded-b-[40px]">
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 text-[#F8F4E9] text-sm text-left"
        >
          &lt; Back
        </button>
      </div>

      {/* Right: sign-in panel */}
      <div className="relative flex-1 md:w-1/2 flex flex-col justify-center px-6 md:px-16 -mt-16 md:mt-0">
        <button
          onClick={() => navigate("/")}
          className="hidden md:block absolute bottom-6 left-6 md:left-16 text-[#6B5A47] text-sm text-left"
        >
          Back To Home
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-9 max-w-md w-full mx-auto">
          <h2 className="text-[#502D55] text-2xl font-bold mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-[#6B5A47] mb-6">
            Sign in to keep track of your spending.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-[#6B5A47]">Email</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0A190]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full border border-[#DEDAD0] rounded-lg p-3 pl-9 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[#6B5A47]">Password</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0A190]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full border border-[#DEDAD0] rounded-lg p-3 pl-9 pr-10 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B0A190] text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-[#6B5A47]">
              <label className="flex items-center gap-1.5">
                <input type="checkbox" className="accent-[#502D55]" /> Remember
                me
              </label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="text-[#8d5d76] font-medium hover:underline cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {error && <p className="text-xs text-[#6B2E43]">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-8">
            <SocialLogin />
            <p className="text-center text-sm text-[#6B5A47] mt-6">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-[#935073] font-semibold"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Forgot password modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg relative">
            <button
              onClick={closeForgotModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>

            {resetSent ? (
              <div className="text-center pt-2">
                <h3 className="text-[#502D55] text-lg font-bold mb-2">
                  Check your email
                </h3>
                <p className="text-sm text-[#6B5A47] mb-4">
                  We've sent a password reset link to{" "}
                  <span className="font-semibold">{resetEmail}</span>.
                </p>
                <Button
                  onClick={closeForgotModal}
                  className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-2.5 rounded-lg transition"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-[#502D55] text-lg font-bold mb-1">
                  Reset your password
                </h3>
                <p className="text-sm text-[#6B5A47] mb-4">
                  Enter your email and we'll send you a reset link.
                </p>
                <form onSubmit={handleForgotSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full border border-[#DEDAD0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                  />
                  {resetError && (
                    <p className="text-xs text-[#6B2E43]">{resetError}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={resetLoading}
                    className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-2.5 rounded-lg transition disabled:opacity-60"
                  >
                    {resetLoading ? "Sending..." : "Send reset link"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
