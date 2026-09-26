import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!agreed) {
      setError("Please agree to the processing of personal data.");
      return;
    }
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
            alt="Sign up illustration"
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

      {/* Right: sign-up panel */}
      <div className="relative flex-1 md:w-1/2 flex flex-col justify-center px-6 md:px-16 -mt-16 md:mt-0">
        {/* CHANGE 1: back button moved to bottom-left, like Sign In's "Back To Home" */}
        <button
          onClick={() => navigate("/")}
          className="hidden md:block absolute bottom-6 left-6 md:left-16 text-[#6B5A47] text-sm text-left"
        >
          Back To Home
        </button>

        {/* Card: centered, as you set it up */}
        <div className="bg-white rounded-3xl shadow-lg p-9 max-w-md w-full mx-auto">
          <h2 className="text-[#502D55] text-2xl font-bold mb-1">
            Get started
          </h2>
          <p className="text-sm text-[#6B5A47] mb-6">
            Create an account to start tracking your spending.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-[#6B5A47]">Full Name</label>
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
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
                  </svg>
                </span>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full border border-[#DEDAD0] rounded-lg p-3 pl-9 focus:outline-none focus:ring-2 focus:ring-[#935073]/40 focus:border-[#935073] transition"
                />
              </div>
            </div>

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

            {/* CHANGE 2: fixed checkbox overlap on tablet/phone
                - text now sits in its own <span>, checkbox has shrink-0 so it can't get squeezed
                - leading-relaxed gives the wrapped text breathing room instead of crowding the line above */}
            <label className="flex items-start gap-2 text-xs text-[#6B5A47] leading-relaxed">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  setError("");
                }}
                className="mt-0.5 shrink-0 accent-[#502D55]"
              />
              <span>
                I agree to the processing of{" "}
                <span className="text-[#935073] font-semibold">
                  Personal data
                </span>
              </span>
            </label>
            {error && <p className="text-xs text-[#6B2E43]">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#502D55] hover:bg-[#3f2244] text-[#F8F4E9] font-semibold py-3 rounded-lg mt-2 transition"
            >
              Sign up
            </Button>
          </form>

          {/* CHANGE 3: "Already have an account?" restored to the bottom of the card,
              like the original — removed from the header row */}
          <p className="text-center text-sm text-[#6B5A47] mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/signin")}
              className="text-[#935073] font-semibold"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
