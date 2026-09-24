import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";
import SocialLogin from "../../components/reusable/Icons/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ← NEW (needed for the show/hide toggle)

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
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

        {/* ⬇️ CHANGE 1: CENTERED CARD ⬇️
            Was:  className="bg-white rounded-3xl shadow-lg p-9"
            Now:  added "max-w-md w-full mx-auto" — mx-auto (not md:mx-0)
            keeps it centered on every screen size, unlike Sign Up
            which uses md:mx-0 to push it left on desktop. */}
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
              {/* ⬇️ CHANGE 2: EMAIL ICON + FOCUS RING ⬇️
                  Was: plain <input> with no wrapper, no icon
                  Now: wrapped in relative div, added envelope icon,
                  added pl-9 (room for icon) and focus:ring classes */}
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
              {/* ⬇️ CHANGE 3: PASSWORD ICON + SHOW/HIDE + FOCUS RING ⬇️
                  Was: plain <input type="password"> with no wrapper
                  Now: wrapped in relative div, lock icon added on left,
                  show/hide toggle button added on right (uses new
                  showPassword state), focus:ring added */}
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
              <span className="text-[#8d5d76] font-medium hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2 transition"
            >
              Sign in
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
    </div>
  );
};

export default SignIn;
